var auth = require('./auth');
var Game = require('../models/GameModel');

module.exports = function(app) {
  app.get('/api/games', function(req, res) {
    Game.find({}, function(err, results) {
      console.log(results);
      if (err) return res.send(501, err.message);
      res.send(results);
    });
  });
}
