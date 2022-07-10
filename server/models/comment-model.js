const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  text: {type: String, required: true},
  createDate: {type: Date, required: true}
})