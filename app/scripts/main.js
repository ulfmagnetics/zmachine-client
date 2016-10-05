/*global ZmachineClient, Backbone, $*/

window.ZmachineClient = {
  Config: {
    apiUrl: 'http://localhost:5000',
    // FIXME this should be added to the API
    availableGames: [
      { 'name': 'devours', label: 'All Things Devours' },
      { 'name': 'zork1', label: 'Zork I' }
    ]
  },
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    var router = new this.Routers.Game();
  }
};

$(document).ready(function () {
  'use strict';
  ZmachineClient.init();
});
