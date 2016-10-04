/*global ZmachineClient, Backbone*/

ZmachineClient.Models = ZmachineClient.Models || {};

(function () {
  'use strict';

  ZmachineClient.Models.Game = Backbone.Model.extend({

    idAttribute: 'pid',

    initialize: function() {
    },

    defaults: {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    },

    description: function() {
      return this.get('label') + ' (' + this.get('zfile') + ')';
    }
  });

})();
