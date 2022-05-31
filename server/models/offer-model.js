const {Schema, model} = require('mongoose')

const OfferSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  offerType: String,
  offerName: String,
  rating: Number,
  numberOfVotes: Number,
  lowestPrice: Number,
  guests: Number,
  phone: Number,
  description: String, 
  highlights: 
})