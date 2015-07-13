'use strict';
var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  GameModel = require('./models/game'),
  GameCollection = require('./models/gameCollection'),
  Router = require('./router.js');

Backbone.$ = $;

window.app = window.app || {};

window.app.gameCollection = new GameCollection();

window.app.gameCollection.fetch({reset: true});

window.app.router = new Router();


Backbone.history.start({pushState: true});
