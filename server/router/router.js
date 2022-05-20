const router = require('express').Router()
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');
const User = require('../models/user-model')

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
      res.send(`${user} Зарегало`,)
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

     if (isPassEquals) {
       res.send({ name: user.name })
    }
      

  } catch (e) {
    console.log('Неправильный email или пароль');
  }
})

// router.logout('/logout', (req, res) => {

// })

module.exports = router