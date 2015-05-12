'use strict';
var $ = require('jquery'),
  Backbone = require('backbone');

$.get('/games', function(err, data) {
  console.log(data || err);
   $("body").append(data);
});
