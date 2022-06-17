const {Schema, model} = require('mongoose');

const CountrySchema = new Schema({
  country: {type: String, required: true, unique: true}
})

module.exports = model('Country', CountrySchema)