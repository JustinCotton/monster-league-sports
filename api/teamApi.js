const mongoose = require('./connection.js');


// defines structure of team entity
const TeamSchema = new mongoose.Schema({
    cityName: String,
    teamName: String,
    teamLogo: String,
    // players: [PlayerSchema],
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