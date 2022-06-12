const {Schema, model} = require('mongoose');

const OfferImagesSchema = new Schema({
  filename: {type: String, required: true},
  offer: {type: Schema.Types.ObjectId, ref: 'Offer'},
})

module.exports = model('OfferImage', OfferImagesSchema)