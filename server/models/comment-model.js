const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  offer: {type: Schema.Types.ObjectId, ref: 'Offer', required: true},
  text: {type: String, required: true},
  createDate: {type: Date, required: true},
  rating: Number, required: true, 
})

module.exports = model('Comment', CommentSchema)