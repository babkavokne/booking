require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user-model')
// const router = express.Router();

const PORT = process.env.PORT || 80;
const app = express();

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

const start = async () => {
  try {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server started at PORT = ${PORT}`));

  } catch (e) {
    console.log(e);
  }
}

app.post('/registration', (req, res) => {
  User.create(req.body)
  console.log(req.body);
})

start()