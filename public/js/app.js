'use strict';
var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  GameModel = require('./models/game'),
  GameCollection = require('./models/gameCollection');

Backbone.$ = $;

var GameView = Backbone.View.extend({
  template: _.template($('#single-game-view').html()),
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function(){
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
});

var gameCollection = new GameCollection();
window.col = gameCollection;
gameCollection.fetch({reset: true});

console.dir(gameCollection);
