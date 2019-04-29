let express = require("express");
let router = express.Router();
const playerController = require("../controllers/players.js");

// Create a GET index route "/" that triggers the playerController index function
router.get('/',playerController.index)

// Create a GET show route "/:id" that triggers the playerController show function
router.get('/players/:id',playerController.show)

// Create a POST players route "/players/" that triggers the playerController create function
router.post('/players/',playerController.create)

// Create a GET edit route "/:id/edit" that triggers the playerController edit function
router.get("/players/:id/edit",playerController.edit)

// Create a PUT update route "/:id" that triggers the donut controller update function
router.put("/players/:id",playerController.update)

// Create a DELETE delete route "/:id" that triggers the playerController delete function
router.delete('/players/:id',playerController.delete)

module.exports = router