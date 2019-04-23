const Shop = require('../models/Shop.js')

const shopController = {
    index: (req, res) => {
        Shop.find()
            .then(shops => {
                res.json({shops})
            })
    },
    create: (req, res) => {
        Shop.create(req.body).then(shop => {
            res.status(201).json({shop})
        })
    },
    show: (req, res) => {
        let {shopId} = req.params
        Shop.findById(shopId).then(shop => {
            res.json({shop})
        })
    },
    update: (req, res) => {
        // need to pass {new: true} as the third argument in order to get the updated shop from the db
        Shop.findByIdAndUpdate(req.params.shopId, req.body, {new: true}).then((shop) => {
            res.json({shop})
        })
    },
    delete: (req, res) => {
        Shop.findByIdAndDelete(req.params.shopId).then((shop) => {
            console.log(`Deleted shop with the id of ${req.params.shopId}`)
            res.json({shop})
        })
    }


}

module.exports = shopController