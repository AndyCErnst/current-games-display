var auth = require('./auth');
var Game = require('../models/GameModel');

module.exports = function(app) {
  app.get('/api/games', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    Game.find({}, function(err, results) {
      if (err) return res.send(500, err.message);
      res.send(results);
    });
  });
  app.get('/api/games/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log('req.body is');
    console.log(req.body);
    Game.findOne({'_id':req.params.id}, function(err, game) {
      if (err) return res.send(500, err.message);
      res.send(game);
    })
  });
  app.post('/api/games', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log('req.body is');
    console.log(req.body);
    var game = new Game(req.body); // Look at what backbone sends
    game.save(function(err, newGame) {
      if (err) return res.send(500, err.message);
      res.send(newGame);
    })
  });
  app.put('/api/games/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    console.log('put req.body is');
    console.log(req.body);

    // var game = new Game(req.body); // Look at what backbone sends
    // game.save(function(err, newGame) {
    //   if (err) return res.send(500, err.message);
    //   res.send(newGame);
    // })
  });
  app.delete('/api/games/:id', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    Game.remove({'_id':req.params.id}, function(err){
      if (err) return res.send(500, err.message);
      res.send({'message' : 'success'});
    });
  });
}
