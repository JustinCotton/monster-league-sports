const Player = require("../models/playerApi.js");

const playerController = {
  
  // Create a function sends all Donuts to donuts/index.hbs view
  index: function(req, res) {
    Player.find().then(players => {
      res.render("index", { players });
    });
  },
  
  // Create a function that renders a single Player's show page
  show: function(req, res) {
    Player.findById(req.params.id).then(player => {
      res.render("player", { player });
    });
  },
  
  // Create a function that creates a new Player
  // and upon success redirects back to the index page "/"
  create: function(req, res) {
    console.log(req);
    Player.create(req.body).then(() => res.redirect("player"));
  },
  
  // Create a function that renders the edit.hbs page and
  // sends a Player's data to it
  edit: function(req, res) {
    Donut.findById(req.params.id).then(player => {
      res.render("players/edit", { player });
    });
  },
  
  // Create a function that updates the Player and
  // redirects back to that Player's page
  update: function(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.redirect("/player/" + req.params.id);
    });
  },
  
  // Create a function that deletes the Player and
  // redirects back to index page "/"
  delete: function(req, res) {
    Player.findByIdAndRemove(req.params.id).then(() => {
      res.redirect("/");
    });
  }
};

module.exports = playerController;