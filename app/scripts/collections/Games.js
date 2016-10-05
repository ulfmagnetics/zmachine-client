/*global ZmachineClient, Backbone*/

ZmachineClient.Collections = ZmachineClient.Collections || {};

(function () {
  'use strict';

  ZmachineClient.Collections.Games = Backbone.Collection.extend({
    url: function() {
      return ZmachineClient.Config.apiUrl + '/games';
    },
    model: ZmachineClient.Models.Game
  });

  ZmachineClient.Collections.Games.allAvailableGames = function() {
    return _.map(ZmachineClient.Config.availableGames, function(attrs) {
      return new ZmachineClient.Models.Game(attrs);
    });
  };


})();
