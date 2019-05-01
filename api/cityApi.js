const mongoose = require('./connection.js');
const PlayerCollection = require("./playerApi.js");
const TeamCollection = require("./teamApi.js");

// defines structure of city entity
const Schema = mongoose.Schema;
const CitySchema = new Schema({
    cityName: String,
    cityPhoto: String,
    citySlogan: String,
    cityStats: {
        population: Number,
        terrain: String,
        averageTemp: Number,
        dailyHoursOfDarkness: Number,
        localDelicacy: String,
        localBrewery: String,
        localAttraction: String
    },
    players:[{type:Schema.Types.ObjectId,ref:PlayerCollection}],
    teams:[{type:Schema.Types.ObjectId,ref:TeamCollection}],
    // stadiums: [TeamSchema.stadium]
});

function getAllCities (req,res) {
    return CityCollection.find();
}

function createCity (newCityData) {
    return CityCollection.create(newCityData)
}

function getCityById (cityId) {
    return CityCollection.findById(cityId);
}

function deleteCity(cityId) {
    return CityCollection.deleteOne({_id: cityId});
}

function editCity (cityId, newCityData) {
    return CityCollection.findOneAndUpdate({_id: cityId}, newCityData, { new: true });
}

let CityCollection = mongoose.model("City", CitySchema);
  
// export the Player model with module.exports
module.exports = {
    CityCollection,
    getAllCities,
    createCity,
    getCityById,
    deleteCity,
    editCity
}