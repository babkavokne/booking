const {Schema, model} = require('mongoose');

const OfferImagesSchema = new Schema({
  name: {type: String, required: true},
  offer: {type: Schema.Types.ObjectId, ref: 'NewOffer'},
})