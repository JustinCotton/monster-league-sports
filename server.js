const playerApi = require("./api/playerApi.js");
const methodOverride = require("method-override");

const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded());

app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    playerApi.getAllPlayers()
        .then(players => {
            res.render("index", {players});
        });
});

app.get("/players", (req, res) => {
    playerApi.getAllPlayers()
        .then(players => {
            res.render("players", {players});
        });
});

app.get("/players/:playerId", (req, res) => {
    playerApi.getPlayerById(req.params.playerId)
        .then(player => {
            res.render("player", {player});
        });
})

app.post("/players", (req,res) => {
    playerApi.createPlayer(req.body)
        .then(() => {
            res.redirect("players");
        });
})

app.delete("/players/:playerId", (req, res) => {
    playerApi.deletePlayer(req.params.playerId)
        .then(() => {
            res.redirect("players");
        });
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});