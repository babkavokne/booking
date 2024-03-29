const router = require('express').Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const User = require('../models/user-model');
const UserDto = require('../dtos/user-dto');
const tokenService = require('../services/token-service');
const tokenModel = require('../models/token-model');
const AvatarModel = require('../models/avatar-model');
const OfferModel = require('../models/offer-model');
const CountryModel = require('../models/country-model');
const OfferImageModel = require('../models/offer-images-model')
const mongoose = require('mongoose');


const path = require('path')
const multer = require('multer');

const avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/avatars')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'static/images')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const avatarUpload = multer({ storage: avatarStorage })
const imageUpload = multer({ storage: imageStorage })

router.post('/createOffer', imageUpload.array('images'), async (req, res) => {
  const offer = JSON.parse(req.body.offer)

  offer.rating = 0;
  offer.numberOfVotes = 0;
  offer.images = req.files.map(file => file.filename)

  console.log('???', offer);
  console.log('files!!! length', req.files.length);
  const newOffer = await OfferModel.create(offer)
  const country = await CountryModel.findOne({ country: newOffer.country })
  console.log('country', country);
  if (!country) {
    const newCountry = await CountryModel.create({ country: newOffer.country })
    console.log('newCountry', newCountry);
  }

  console.log('aAAA', req.files.map((file) => { file.offer = newOffer._id }));

  const offerImages = await OfferImageModel.create(req.files)

  console.log('newOffer', newOffer);
  console.log('offerImages', offerImages);

  res.json({ message: 'offer has created' })
})

router.post('/uploadAvatar', avatarUpload.single('avatar'), async (req, res) => {
  const oldAvatar = await AvatarModel.findOne({ user: new mongoose.Types.ObjectId(req.body.id), isAvatar: true })
  if (oldAvatar) {
    console.log('old Avatar', oldAvatar);
    oldAvatar.isAvatar = false;
    oldAvatar.save()
  }
  console.log('req.file', req.file);

  const avatar = await AvatarModel.create({ name: req.file.filename, user: new mongoose.Types.ObjectId(req.body.id), isAvatar: true })
  res.send(req.file)
})

router.get('/getCountries', async (req, res) => {
  const countries = await CountryModel.find();
  res.send({ countries })
})

router.get('/openCountry/:countryName', async (req, res) => {
  console.log('getOffers', req.params.countryName);
  const countryOffers = await OfferModel.find({ country: req.params.countryName })
  console.log('countryOffers', countryOffers);
  res.json(countryOffers)
})

router.get('/getOffer/:id', async (req, res) => {
  console.log('getOffer', req.params);
  const offer = await OfferModel.findOne({_id: req.params.id})
  console.log('offer', offer);
  res.json(offer)
})

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  async (req, res) => {
    try {
      console.log(req.body.name);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() })
      }

      const candidate = await User.findOne({ email: req.body.email })
      if (candidate) {
        return res.send('Такой уже есть')
      }

      let { email, password, name } = req.body
      const hashPassword = await bcrypt.hash(password, 3)

      const user = await User.create({ email, password: hashPassword, name })
      const userDto = new UserDto(user);
      const tokens = tokenService.generateToken({ ...userDto });
      const result = await tokenService.saveToken(userDto.id, tokens.refresh)

      res.cookie('refreshToken', tokens.refresh, { maxAge: 60 * 24 * 60 * 60 * 1000, httpOnly: true })

      res.status(200).send('alles kla')
    } catch (e) {
      res.status(500).send('Ошибка')
    }
  }
)

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    console.log('user', user);
    if (!user) {
      throw new Error('Нет такого :(')
    }


    const isPassEquals = await bcrypt.compare(password, user.password)
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    const result = await tokenService.saveToken(userDto.id, tokens.refresh)
    const avatar = await AvatarModel.findOne({ user: user._id, isAvatar: true })

    if (isPassEquals) {
      res.cookie('refresh', tokens.refresh).json({ name: user.name, access: tokens.access, id: user.id, avatar: avatar?.name })
    }


  } catch (e) {
    console.log('Неправильный email или пароль');
  }
})

router.post('/logout', async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    const token = await tokenModel.deleteOne({ refreshToken })
    res.clearCookie('refresh').json({ message: 'it"s ok' })
  } catch (e) {
    console.log('Ну если ты даже выйти не смог...');
  }
})

router.get('/refresh', async (req, res) => {
  const { refresh } = req.cookies;
  const userData = tokenService.validateRefreshToken(refresh);
  const tokenFromDb = await tokenModel.findOne({ refresh });
  if (!userData || !tokenFromDb) {
    res.status(500).json({ message: 'Мужичок\девчуля, ты не авторизован\а' })
  }
  const user = await User.findById(userData.id);
  const userDto = new UserDto(user);
  const tokens = tokenService.generateToken({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refresh)
  res.cookie('refresh', tokens.refresh, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
  res.json({ ...tokens, user: userDto })
})

router.patch('/update', async (req, res) => {
  try {
    const user = await User.findById(req.body.id);

    const newUser = { ...req.body }
    newUser.name = `${newUser.sureName || user.name.split(' ')[0]} ${newUser.firstName || user.name.split(' ')[1]} ${newUser.secondName || user.name.split(' ')[2]}`

    if (req.body.password) {
      const newPassword = req.body.password
      newUser.password = await bcrypt.hash(newPassword, 3)
    }

    Object.assign(user, newUser)
    user.save()

    res.json({ user })
  } catch (e) {
    console.log(e);
  }
})

router.post('/changeRating', async (req, res) => {
  const offer = await OfferModel.findOne({_id: req.body.id})
  const oldRatingValue = offer.rating * offer.numberOfVotes;
  offer.numberOfVotes++;
  const newRatingValue = (oldRatingValue + req.body.newRating) / offer.numberOfVotes
  offer.rating = newRatingValue;
  offer.save()
  console.log('offer', offer);
  res.json({message: "Ok", data: offer.rating.toFixed(1)})
})


// router.post('/createComment', (req, res) => {

// })

module.exports = router