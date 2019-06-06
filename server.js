const playerApi = require("./api/playerApi.js");
const teamApi = require("./api/teamApi.js");
const cityApi = require("./api/cityApi.js");
const methodOverride = require("method-override");

const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(express.static(__dirname + '/public'))

app.use(express.urlencoded({extended: true}));

app.use(methodOverride("_method"));

// loading index page

app.get("/", (req, res) => {
    playerApi.getAllPlayers()
        .then(players => {
            res.render("index", {players});
        });
});

// player functions

app.get("/players", (req, res) => {
    playerApi.getAllPlayers()
        .then(players => {
            res.render("players/players", {players});
        });
});

app.get("/players/:playerId", (req, res) => {
    playerApi.getPlayerById(req.params.playerId)
        .then(player => {
            res.render("players/player", {player});
        });
})

app.post("/players", (req,res) => {
    playerApi.createPlayer(req.body)
        .then(player => {
            res.render("players/spawn", {player});
        });
})

app.delete("/players/:playerId", (req, res) => {
    playerApi.deletePlayer(req.params.playerId)
        .then(() => {
            res.render("players/destroy");
        });
})

app.put("/players/:playerId", (req, res) => {
    playerApi.editPlayer(req.params.playerId, req.body)
        .then(player => {
            res.render("players/mutate", {player});
        });
})

// team functions

app.get("/teams", (req, res) => {
    teamApi.getAllTeams()
        .then(teams => {            
            res.render("teams/teams", {teams});          
        });
});

app.get("/teams/:teamId", (req, res) => {
    teamApi.getTeamById(req.params.teamId)
        .then(team => {
            console.log(team)
            playerApi.getPlayersByTeam(team.cityName, team.teamName)
                .then(players => {
                    console.log(players)
                    res.render("teams/team", {team, players});
                });  
        });
})

app.post("/teams", (req,res) => {
    teamApi.createTeam(req.body)
        .then(team => {
            res.render("teams/spawn", {team});
        });
})

app.delete("/teams/:teamId", (req, res) => {
    teamApi.deleteTeam(req.params.teamId)
        .then(() => {
            res.render("teams/destroy");
        });
})

app.put("/teams/:teamId", (req, res) => {
    teamApi.editTeam(req.params.teamId, req.body)
        .then(team => {
            res.render("teams/mutate", {team});
        });
})

// city functions

app.get("/cities", (req, res) => {
    cityApi.getAllCities()
        .then(cities => {
            res.render("cities/cities", {cities});
        });
});

app.get("/cities/:cityId", (req, res) => {
    cityApi.getCityById(req.params.cityId)
        .then(city => {
            playerApi.getPlayersByCity(city.cityName)
                .then(players => {
                    teamApi.getTeamsByCity(city.cityName)
                        .then(teams => {
                            res.render("cities/city", {city, players, teams});
                        });
                });  
        });
})

app.post("/cities", (req,res) => {
    cityApi.createCity(req.body)
        .then(city => {
            res.render("cities/spawn", {city});
        });
})

app.delete("/cities/:cityId", (req, res) => {
    cityApi.deleteCity(req.params.cityId)
        .then(() => {
            res.render("cities/destroy");
        });
})

app.put("/cities/:cityId", (req, res) => {
    cityApi.editCity(req.params.cityId, req.body)
        .then(city => {
            res.render("cities/mutate", {city});
        });
})


const PORT = process.env.PORT || 3000 
app.listen(PORT, () => {
    console.log("Connected at: " + PORT);
});