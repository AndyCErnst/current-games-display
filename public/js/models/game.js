var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  idAttribute: '_id',
  // rootUrl: 'api/games/',
  defaults: {
    title: 'Untitled Game',
    description: 'No description given',
    image: null,
    dateTime: new Date(),
    inProgress: false,
    durationMins: 240,
    maxPlayers: 4,
    currentPlayers: 0
  }
});
