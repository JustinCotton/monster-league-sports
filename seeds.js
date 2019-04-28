let Player = require('./playerApi.js')

let newPlayers = [
  {
    playerName: "Grendel",
    playerPhoto: "https://images.freeimages.com/images/premium/previews/9461/9461581-baseball-monster.jpg",
    position: "1B",
    playerStats: {
        hits: 40,
        average: .333,
        RBIs: 55,
        HRs: 27,
        steals: 2,
        errors: 0
    },
    isAllStar: true,
    cityName: "Monsterton",
    teamName: "Mashers"
  },
  {
    playerName: "Sid Vitreous",
    playerPhoto: "https://dumielauxepices.net/sites/default/files/baseball-clipart-monster-854541-2398937.png",
    position: "SS",
    playerStats: {
        hits: 200,
        average: .412,
        RBIs: 80,
        HRs: 40,
        steals: 14,
        errors: 0
    },
    isAllStar: true,
    cityName: "Vermicia",
    teamName: "Knids"
  },
  {
    playerName: "Rif Asteroth",
    playerPhoto: "https://st3.depositphotos.com/5948652/13147/v/1600/depositphotos_131474128-stock-illustration-baseball-mascots-purple-monster.jpg",
    position: "3B",
    playerStats: {
        hits: 41,
        average: .310,
        RBIs: 28,
        HRs: 34,
        steals: 9,
        errors: 7
    },
    isAllStar: false,
    cityName: "Spectropolis",
    teamName: "Grimoires"
  },
  {
    playerName: "Wraith Rasperoli",
    playerPhoto: "https://dumielauxepices.net/sites/default/files/baseball-clipart-monster-854541-7419196.jpg",
    position: "CF",
    playerStats: {
        hits: 29,
        average: .290,
        RBIs: 19,
        HRs: 5,
        steals: 30,
        errors: 12
    },
    isAllStar: false,
    cityName: "Spectropolis",
    teamName: "Phantasms"
  },
  
]

Player.createPlayer(newPlayers).then(roster => {
  console.log('Signed Players', roster)
})