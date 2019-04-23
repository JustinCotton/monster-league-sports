const Shop = require('../models/Shop.js')

const shopController = {
    index: (req, res) => {
        Shop.find()
            .sort({name: -1})
            .then(shops => {
                res.render('index', {shops})
            })
    },
    new: (req, res) => {
        res.render('new')
    },
    create: (req, res) => {
        Shop.create(req.body).then(shop => {
            res.redirect('/')
        })
    },
    show: (req, res) => {
        let {shopId} = req.params
        Shop.findById(shopId).then(shop => {
            res.render('show', {shop, shopId})
        })
    },
    edit: (req, res) => {
        Shop.findById(req.params.shopId).then(shop => {
            res.render('edit', {shop})
        })
    },
    update: (req, res) => {
        // need to pass {new: true} as the third argument in order to get the updated shop from the db
        Shop.findByIdAndUpdate(req.params.shopId, req.body, {new: true}).then(() => {
            res.redirect(`/${req.params.shopId}`)
        })
    },
    delete: (req, res) => {
        Shop.findByIdAndDelete(req.params.shopId).then(() => {
            console.log(`Deleted shop with the id of ${req.params.shopId}`)
            res.redirect('/')
        })
    }


}

module.exports = shopController