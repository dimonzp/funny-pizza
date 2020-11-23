const {Schema, model} = require('mongoose');

const schema = new Schema({
    product: {type: String, required: true},
    name: {type: String, required: true, unique: true},
    img: String,
    volume: String,
    composition: Array,
    price: Number,
    variableProduct: Array,
    likes: Number
});

module.exports = model('Product', schema);