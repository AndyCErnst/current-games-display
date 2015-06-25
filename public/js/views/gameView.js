var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: _.template($('#single-game-view').html()),
  events: {
    'click .game-view': 'showGameView'
  },
  showGameView: function(){
    console.log('show game view');
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
