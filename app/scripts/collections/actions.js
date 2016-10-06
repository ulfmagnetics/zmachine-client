/*global ZmachineClient, Backbone*/

ZmachineClient.Collections = ZmachineClient.Collections || {};

(function () {
  'use strict';

  ZmachineClient.Collections.Actions = Backbone.Collection.extend({

    model: ZmachineClient.Models.Action,

    comparator: 'createdAt',

    url: function() {
      return this.game.url() + '/action';
    },

    localStorage: new Backbone.LocalStorage('Actions'),

    currentStatus: function() {
      if (this.length <= 0) { return ''; }
      return this.at(0).get('status');
    },

    setGame: function(game) {
      this.game = game;
    },

    getGame: function() {
      return this.game;
    }

  });

})();
