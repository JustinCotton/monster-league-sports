const mongoose = require('./connection.js');

// defines structure of player entity
const TeamSchema = new mongoose.Schema({
    cityName: String,
    teamName: String,
    teamLogo: String,
    players: [PlayerSchema],
    teamStats: {
        wins: Number,
        losses: Number,
        championships: Number,
    },
    stadium: String,
    inPlayoffPosition: Boolean
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

let PlayerCollection = mongoose.model("Team", TeamSchema);
  
// export the Player model with module.exports
module.exports = {
    PlayerCollection,
    getAllPlayers,
    createPlayer,
    getPlayerById,
    deletePlayer,
    editPlayer
}