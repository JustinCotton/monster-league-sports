const Shop = require('../models/Shop.js')

const foodController = {
    show: (req, res) => {
        let {shopId, foodId} = req.params

        Shop.findById(shopId).then(shop => {
            let foodItem = shop.foodItems.id(foodId)
                console.log(foodItem)
            res.render('foods/show', {foodItem, shopId})
        })
    },
    edit: (req, res) => {
        res.send('Edit form')
    }
}

module.exports = foodController