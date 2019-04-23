const express = require('express')
const router = express.Router()
const apiShopController = require('../controllers/apiShopController.js')
const foodController = require('../controllers/foodController.js')

// Shop routes
router.get('/', apiShopController.index)
router.post('/', apiShopController.create)
router.get('/:shopId', apiShopController.show)
router.put('/:shopId', apiShopController.update)
router.delete('/:shopId', apiShopController.delete)

module.exports = router