const mongoose = require('./connection.js');
const PlayerCollection = require("./playerApi.js");

// defines structure of team entity
const Schema = mongoose.Schema;
const TeamSchema = new Schema({
    cityName: String,
    teamName: String,
    teamLogo: String,
    players:[{type:Schema.Types.ObjectId,ref:PlayerCollection}],
    teamStats: {
        wins: Number,
        losses: Number,
        championships: Number,
    },
    stadium: String,
    inPlayoffPosition: Boolean
});

function getAllTeams (req,res) {
    return TeamCollection.find();
}

function createTeam (newTeamData) {
    return TeamCollection.create(newTeamData)
}

function getTeamById(teamId) {
    return TeamCollection.findById(teamId);
}

function deleteTeam(teamId) {
    return TeamCollection.deleteOne({_id: teamId});
}

function editTeam (teamId, newTeamData) {
    return TeamCollection.findOneAndUpdate({_id: teamId}, newTeamData, { new: true });
}


let TeamCollection = mongoose.model("Team", TeamSchema);
  
// export the Team model with module.exports
module.exports = {
    TeamCollection,
    getAllTeams,
    createTeam,
    getTeamById,
    deleteTeam,
    editTeam
}