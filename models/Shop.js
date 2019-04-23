const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const FoodSchema = new Schema({
    name: String,
    price: String
})

const ShopSchema = new Schema({
    name: String,
    rating: Number,
    category: String,
    description: String,
    imgLink: String,
    foodItems: [FoodSchema]
})

module.exports = mongoose.model('Shop', ShopSchema)