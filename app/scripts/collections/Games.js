/*global ZmachineClient, Backbone*/

ZmachineClient.Collections = ZmachineClient.Collections || {};

(function () {
  'use strict';

  ZmachineClient.Collections.Games = Backbone.Collection.extend({
    url: function() {
      return ZmachineClient.Config.apiUrl + '/games';
    },
    localStorage: new Backbone.LocalStorage('GameCollection'),
    model: ZmachineClient.Models.Game
  });

})();
