'use strict';
var $ = require('jquery'),
  Backbone = require('backbone');

$.get('/api/games', function(data, status) {
  console.log(data);
}).fail(function(){
  alert('error getting game list');
});
