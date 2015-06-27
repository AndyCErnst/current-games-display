var $ = require('jquery'),
  _ = require('underscore'),
  Backbone = require('backbone'),
  router = require('../router.js');

module.exports = Backbone.View.extend({
  template: _.template($('#single-game-view').html()),
  events: {
    'click .game-view': 'showEditView'
  },
  showEditView: function(){
    console.log('show edit view');
    router.navigate('edit/' + this.model.get('id'), {trigger: true});
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
