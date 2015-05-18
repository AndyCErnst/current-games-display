var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  GameView = require('./gameView');

module.exports = Backbone.View.extend({
  el: $('#app-content'),
  initialize: function() {
    this.collection.on('add', this.addGame, this);
    this.collection.on('reset', this.addAll, this);
    _.bindAll(this, 'addGame', 'addAll');
  },
  addGame: function(game) {
    var gameView = new GameView({model: game});
    this.$el.append(gameView.render().el);
  },
  addAll: function() {
    this.collection.forEach(this.addGame);
  }
});
