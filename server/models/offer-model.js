const {Schema, model} = require('mongoose')

const OfferSchema = new Schema({
  creator: {type: Schema.Types.ObjectId, ref: 'User'},
  offerType: {type: String, required: true},
  offerName: {type: String, required: true, min: 3},
  rating: Number,
  numberOfVotes: Number,
  lowestPrice: {type: Number, required: true},
  guests: {type: Number, required: true},
  phone: {type: Number, required: true},
  rooms: {type: Number, required: true},
  description: String, 
  highlights: [String]
})

module.exports = model('NewOffer', OfferSchema);