/*global ZmachineClient, $*/

window.ZmachineClient = {
  Config: {
    apiUrl: 'http://localhost:5000'
  },
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function () {
  'use strict';
  ZmachineClient.init();
});
