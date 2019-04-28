const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/monster-league-sports", {useNewUrlParser:true}).then(()=>{
//     console.log ("Connected to MongoDB")
// });

// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
  }
  else {
    mongoose.connect('mongodb://localhost/monster-league-sports', { useNewUrlParser: true });
  }
  mongoose.connection.on('error', function(err) {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
    }
  );
  mongoose.connection.once('open', function() {
    console.log("Mongoose has connected to MongoDB!");
  });

module.exports = mongoose;