/*global ZmachineClient, Backbone*/

ZmachineClient.Models = ZmachineClient.Models || {};

(function () {
  'use strict';

  ZmachineClient.Models.Game = Backbone.Model.extend({

    url: '',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
