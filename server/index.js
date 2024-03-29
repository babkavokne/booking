require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user-model');
const router = require('./router/router');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(`${__dirname}/static/`))
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}));

app.use('/', router)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server started at PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start()