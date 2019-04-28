const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/monster-league-sports", {useNewUrlParser:true}).then(()=>{
    console.log ("Connected to MongoDB")
})

module.exports = mongoose;