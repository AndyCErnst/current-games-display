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
    var id = this.model.get('id') || this.model.get('cid');
    window.app.router.navigate('edit/' + id, {trigger: true});
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
