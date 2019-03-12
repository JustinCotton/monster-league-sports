const Shop = require('../models/Shop.js')

const foodController = {
    show: (req, res) => {
        let {shopId, foodId} = req.params

        Shop.findById(shopId).then(shop => {
            let foodItem = shop.foodItems.id(foodId)
            res.json({foodItem})
        })
    }
}

module.exports = foodController