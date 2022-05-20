const {Schema, model} = require('mongoose');

const TokenSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  refrehToken: {type: String, required: true}
})
