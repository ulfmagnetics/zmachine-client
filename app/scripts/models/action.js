/*global ZmachineClient, Backbone*/

ZmachineClient.Models = ZmachineClient.Models || {};

(function () {
  'use strict';

  ZmachineClient.Models.Action = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      createdAt: Date.now()
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

})();
