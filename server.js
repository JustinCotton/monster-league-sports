const playerApi = require("./api/playerApi.js");

const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded());

app.get("/", (req, res) => {
    // res.send("Hello, World!");
    playerApi.getAllPlayers()
        .then(players => {
            // res.send(players);
            res.render("players", {players});
        });
});

app.get("/:playerId", (req, res) => {
    playerApi.getPlayerById(req.params.playerId)
        .then(player => {
            res.render("player", {player});
        });
})

app.post("/", (req,res) => {
    playerApi.createPlayer(req.body)
        .then(() => {
            res.render("players");
        });
})

const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});