let Player = require('./api/playerApi.js')
let Team = require('./api/teamApi.js')
let City = require('./api/cityApi.js')

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
  {
    playerName: "Gorgeous Jack",
    playerPhoto: "https://dumielauxepices.net/sites/default/files/sports-clipart-halloween-776088-209547.jpg",
    position: "2B",
    playerStats: {
        hits: 45,
        average: .372,
        RBIs: 70,
        HRs: 42,
        steals: 4,
        errors: 6
    },
    isAllStar: true,
    cityName: "Monsterton",
    teamName: "Mashers"
  },
]

let newTeams = [
  {
    cityName: "Spectropolis",
    teamName: "Phantasms",
    teamLogo: "https://i.pinimg.com/originals/24/e7/24/24e7240284a50cc1ea11cf4dfe96a4e7.jpg",
    players: [
      {
        playerName: "Wraith Rasperoli",
        playerPhoto: "https://i.pinimg.com/originals/24/e7/24/24e7240284a50cc1ea11cf4dfe96a4e7.jpg",
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
      }
    ],
    teamStats: {
        wins: 40,
        losses: 51,
        championships: 6,
    },
    stadium: "Ecto-Dome",
    inPlayoffPosition: false
  },
  {
    cityName: "Spectropolis",
    teamName: "Grimoires",
    teamLogo: "https://media-dominaria.cursecdn.com/attachments/99/450/635032497903148372.jpg",
    players: [
      {
        playerName: "Rif Asteroth",
        playerPhoto: "https://media-dominaria.cursecdn.com/attachments/99/450/635032497903148372.jpg",
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
    ],
    teamStats: {
        wins: 70,
        losses: 11,
        championships: 40,
    },
    stadium: "Valley of Despair",
    inPlayoffPosition: true
  },
  {
    cityName: "Vermicia",
    teamName: "Knids",
    teamLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0boY1ItWidb5RDSZ5-MZ6JGVTrHaWQ5q3xLfBLdLp3eiHUaWpHw",
    players: [
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
    ],
    teamStats: {
        wins: 12,
        losses: 70,
        championships: 2,
    },
    stadium: "The Void Beyond",
    inPlayoffPosition: false
  },
  {
    cityName: "Monsterton",
    teamName: "Mashers",
    teamLogo: "https://media.glassdoor.com/sqll/289148/m-model-management-squarelogo-1461842695817.png",
    players: [
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
        playerName: "Gorgeous Jack",
        playerPhoto: "https://dumielauxepices.net/sites/default/files/sports-clipart-halloween-776088-209547.jpg",
        position: "2B",
        playerStats: {
            hits: 45,
            average: .372,
            RBIs: 70,
            HRs: 42,
            steals: 4,
            errors: 6
        },
        isAllStar: true,
        cityName: "Monsterton",
        teamName: "Mashers"
      }
    ],
    teamStats: {
        wins: 92,
        losses: 5,
        championships: 88,
    },
    stadium: "Monsterton Municipal Graveyard",
    inPlayoffPosition: true
  },
]

let newCities = [
  {
    cityName: "Spectropolis",
    cityPhoto: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/68f5ffba-0641-42ad-a49c-f65fe2fb2532/d78w5cm-f0e5446f-c929-47d0-b019-eb845bdb9a57.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4ZjVmZmJhLTA2NDEtNDJhZC1hNDljLWY2NWZlMmZiMjUzMlwvZDc4dzVjbS1mMGU1NDQ2Zi1jOTI5LTQ3ZDAtYjAxOS1lYjg0NWJkYjlhNTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iLf7WWHmDCk_BTDwx9rV7ivy0zMxhgD4ng2p7qH6OKM",
    citySlogan: "No-bodies' Home!",
    cityStats: {
        population: 120000,
        terrain: "Ephemeral",
        averageTemp: -10,
        dailyHoursOfDarkness: 20,
        localDelicacy: "The Souls of the Innocent",
        localBrewery: "Haunted Ales and Spirits",
        localAttraction: "Slime Springs Park"
    },
    teams: [
      "Spectropolis Spectres",
      "Spectropolis Grimoires"
    ],
    players: [
      {
        playerName: "Rif Asteroth",
        playerPhoto: "https://media-dominaria.cursecdn.com/attachments/99/450/635032497903148372.jpg",
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
        playerPhoto: "https://i.pinimg.com/originals/24/e7/24/24e7240284a50cc1ea11cf4dfe96a4e7.jpg",
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
      }
    ]
  },
  {
    cityName: "Monsterton",
    cityPhoto: "https://cdnb.artstation.com/p/assets/images/images/000/557/995/large/kate-yu-town-center.jpg",
    citySlogan: "A Graveyard Smash!",
    cityStats: {
        population: 90000,
        terrain: "Craggy",
        averageTemp: 40,
        dailyHoursOfDarkness: 15,
        localDelicacy: "Bones for Gnawing",
        localBrewery: "Ogre's Fine Lagers",
        localAttraction: "Slime Springs Park"
    },
    teams: [
      "Monsterton Mashers"
    ],
    players: [
      {
        playerName: "Gorgeous Jack",
        playerPhoto: "https://dumielauxepices.net/sites/default/files/sports-clipart-halloween-776088-209547.jpg",
        position: "2B",
        playerStats: {
            hits: 45,
            average: .372,
            RBIs: 70,
            HRs: 42,
            steals: 4,
            errors: 6
        },
        isAllStar: true,
        cityName: "Monsterton",
        teamName: "Mashers"
      },
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
    ]
  },
  {
    cityName: "Vermicia",
    cityPhoto: "http://www.jasminegardeninn.com/cdn/img/nice-rock-city-enchanted-garden-of-lights-similiar-rock-city-enchanted-garden-keywords.jpg",
    citySlogan: "Not a speck of light is showing, so the danger must be growing!",
    cityStats: {
        population: 75000,
        terrain: "Ephemeral",
        averageTemp: 50,
        dailyHoursOfDarkness: 10,
        localDelicacy: "Candied Mushrooms",
        localBrewery: "Blood River Ales",
        localAttraction: "River of Blood"
    },
    teams: [
      "Vermicia Knids"
    ],
    players: [
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
      }
    ]
  },
  {
    cityName: "Hell",
    cityPhoto: "https://geekandsundry.com/wp-content/uploads/2017/04/CR-FI-970x545.png",
    citySlogan: "Yes, you are literally in Hell!",
    cityStats: {
        population: 1000000000001,
        terrain: "Volcanic",
        averageTemp: 500,
        dailyHoursOfDarkness: 24,
        localDelicacy: "Charred Remains of the Damned",
        localBrewery: "Three-Headed Dog Drafthouse",
        localAttraction: "(Literal) Lake of Fire"
    },
    teams: [],
    players: []
  }
]

Player.createPlayer(newPlayers).then(roster => {
  console.log('Signed Players', roster)
})

Team.createTeam(newTeams).then(division => {
  console.log('Expansion Teams', division)
})

City.createCity(newCities).then(geography => {
  console.log('Expansion Cities', geography)
})