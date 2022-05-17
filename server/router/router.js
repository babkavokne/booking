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
      const candidate = User.findOne({email: req.body.email})
      if (candidate) {
        return res.send('Такой уже есть')
      }
      await User.create({ email: req.body.email, password: req.body.password, name: req.body.name })
      res.send('Зарегало')
    } catch (e) {
      res.send('Ошибка')
    }
  }
)

router.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = User.findOne({ email });
  res.send({ email, password })
})

module.exports = router