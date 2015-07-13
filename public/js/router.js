window.app = window.app || {};
var $ = require('jquery'),
  Backbone = require('backbone'),
  GameCollectionView = require('./views/gameCollectionView');


var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'game:/id':'showGame',
    'search/*': 'search'
  },
  initialize: function() {
    this.collection = window.app.gameCollection;
  },
  currentView: '',
  showPage: function(view) {
    console.log('showing ');
    console.log(view);
    if(this.currentView) {
      this.currentView.remove();
    }
    $('#app-content').append(view.render().el);
    this.currentView = view;
  },
  index: function() {
    var gameColView = new GameCollectionView({collection: this.collection});
    this.showPage(gameColView);
  },
  showGame: function(id) {
    var game = this.collection.get(id);
    var gameView = new GameView(game);
    this.showPage(gameView);
  },
  search: function(term) {
    console.log('search registered for ' + term);
    console.log('method not implemented');
  }
});

module.exports = Router;
