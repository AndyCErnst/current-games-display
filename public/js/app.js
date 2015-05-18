'use strict';
var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  GameModel = require('./models/game'),
  GameCollection = require('./models/gameCollection'),
  GameCollectionView = require('./views/gameCollectionView');

Backbone.$ = $;

var gameCollection = new GameCollection();
var gameColView = new GameCollectionView({collection: gameCollection});

gameCollection.fetch({reset: true});

window.col = gameCollection;

