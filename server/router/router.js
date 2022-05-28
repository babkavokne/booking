const router = require('express').Router();
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const User = require('../models/user-model');
const UserDto = require('../dtos/user-dto');
const tokenService = require('../services/token-service');
const tokenModel = require('../models/token-model');

router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  async (req, res) => {
    try {
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

    if (!user) {
      throw new Error('Нет такого :(')
    }

    const isPassEquals = await bcrypt.compare(password, user.password)
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    const result = await tokenService.saveToken(userDto.id, tokens.refresh)

    if (isPassEquals) {
      res.cookie('refresh', tokens.refresh).json({ name: user.name, access: tokens.access })
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
  console.log(refresh);
  const userData = tokenService.validateRefreshToken(refresh);
  console.log(userData);
  const tokenFromDb = await tokenModel.findOne({ refresh });
  if (!userData || !tokenFromDb) {
    res.status(500).json({ message: 'Мужичок\девчуля, ты не авторизован\а' })
  }
  const user = await User.findById(userData.id);
  const userDto = new UserDto(user);
  const tokens = tokenService.generateToken({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refresh)
  res.cookie('refresh', tokens.refresh, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
  res.json({...tokens, user: userDto})
})

module.exports = router