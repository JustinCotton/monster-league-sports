const mongoose = require('./connection.js');

// defines structure of player entity
const PlayerSchema = mongoose.Schema({
    playerName: String,
    playerPhoto: String,
    position: String,
    playerStats: {
        hits: Number,
        average: Number,
        RBIs: Number,
        HRs: Number,
        steals: Number,
        errors: Number
    },
    isAllStar: Boolean,
    cityName: String,
    teamName: String
});

function getAllPlayers (req,res) {
    return PlayerCollection.find();
}

function createPlayer (newPlayerData) {
    return PlayerCollection.create(newPlayerData)
}

function getPlayerById(playerId) {
    return PlayerCollection.findById(playerId);
}

function deletePlayer(playerId) {
    return PlayerCollection.deleteOne({_id: playerId});
}

function editPlayer (playerId, newPlayerData) {
    return PlayerCollection.findOneAndUpdate({_id: playerId}, newPlayerData, { new: true });
}

let PlayerCollection = mongoose.model("Player", PlayerSchema);
  
// export the Player model with module.exports
module.exports = {
    PlayerCollection,
    getAllPlayers,
    createPlayer,
    getPlayerById,
    deletePlayer,
    editPlayer
}