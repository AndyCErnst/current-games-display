window.app = window.app || {};
var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone');

module.exports = Backbone.View.extend({
  template: _.template($('#single-game-view').html()),
  events: {
    'click .game-view': 'showEditView'
  },
  showEditView: function(){
    console.log('show edit view');
    window.app.router.navigate('edit/' + this.model.id, {trigger: true});
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
