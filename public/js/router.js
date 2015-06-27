var Backbone = require('backbone');

var router = Backbone.Router.extend({
  routes: {
    'game:/id':'showGame'
  },
  showGame: function(page) {
    console.log(page);
  }
});


module.exports = router;
