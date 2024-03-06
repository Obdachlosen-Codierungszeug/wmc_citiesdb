var mongoose = require('mongoose');
var citySchema = new mongoose.Schema({
    continent: { type: String, required: true },
    country: { type: String, required: true },
    name: { type: String, required: true },
    population: { type: Number, required: true },
});
module.exports = mongoose.model('City', citySchema);
