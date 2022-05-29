const {Schema, model} = require('mongoose');

const AvatarSchema = new Schema({
  name: {type: String, required: true}, 
  user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = model('Avatar', AvatarSchema)