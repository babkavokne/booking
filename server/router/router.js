const router = require('express').Router()
const { body, validationResult } = require('express-validator');
const User = require('../models/user-model')


router.post('/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(400).json({ errors: errors.array() })
      }
      const candidate = await User.findOne({ email: req.body.email })
      console.log(candidate);
      if (candidate) {
        return res.send('Такой уже есть')
      }
      await User.create({ email: req.body.email, password: req.body.password, name: req.body.name })
      res.send('Зарегало')
    } catch (e) {
      res.status(500).send('Ошибка')
    }
  }
)

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    console.log(user.password, req.body.password);
    if (user && user.password == req.body.password) {
      res.send({ name: user.name })
    } else {
      throw new Error
    }
  } catch (e) {
    console.log('Неправильный email или пароль');
  }
})

// router.logout('/logout', (req, res) => {
  
// })

module.exports = router