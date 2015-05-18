var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: _.template($('#single-game-view').html()),
  // initialize: function() {
  //   this.render();
  // },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
