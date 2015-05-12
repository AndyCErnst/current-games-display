var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({
  title: String,
  description: String,
  image: String,
  dateTime: Date,
  inProgress: Boolean,
  durationMins: Number,
  maxPlayers: { type: Number, min:1},
  currentPlayers: Number
});

var Game = mongoose.model('Game', gameSchema);
Game.find({}).exec(function(err,collection) {
  if(collection.length === 0) {
    Game.create({title: 'TEst Game', description: 'Description is here lorum ipsem', durationMins: 120, numPlayers: 5});
    Game.create({title: 'Test Game2', description: 'Description2 is here lorum ipsem2', durationMins: 360, numPlayers: 3});
  }
});

module.exports = Game;
