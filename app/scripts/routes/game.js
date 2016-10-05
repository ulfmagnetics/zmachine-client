/*global ZmachineClient, Backbone*/

ZmachineClient.Routers = ZmachineClient.Routers || {};

(function () {
  'use strict';

  ZmachineClient.Routers.Game = Backbone.Router.extend({
    routes: {
      'games/new': 'create',
      'games/:pid': 'show',
      '*path': 'defaultRoute'
    },

    defaultRoute: function(path) { this.create(); },

    $container: $('#game-container'),

    initialize: function() {
      // create a collection of available games, since the API doesn't support this
      this.collection = new ZmachineClient.Collections.Games();
      this.collection.add(ZmachineClient.Collections.Games.allAvailableGames());
      ZmachineClient.helpers.debug(this.collection);
      Backbone.history.start();
    },

    create: function() {
      var view = new ZmachineClient.Views.CreateGame({
        collection: this.collection,
        model: new ZmachineClient.Models.Game()
      });
      this.$container.html(view.render().el);
    },

    show: function() {
      // TODO
      console.log('router#show');
    }

  });

})();
