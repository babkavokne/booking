const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  name: {type: String, required: true},
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = model('User', UserSchema)