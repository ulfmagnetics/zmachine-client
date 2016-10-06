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
      console.log('in Routers.Games#initialize');
      this.collection = new ZmachineClient.Collections.Games();
      this.collection.fetch({ajaxSync: false});
      console.log('this.collection=' + JSON.stringify(this.collection.toJSON()));
      Backbone.history.start();
    },

    create: function() {
      console.log('in Routers.Games#create');
      console.log('this.collection=' + JSON.stringify(this.collection.toJSON()));
      var view = new ZmachineClient.Views.CreateGame({
        collection: this.collection,
        model: new ZmachineClient.Models.Game()
      });
      this.$container.html(view.render().el);
    },

    show: function(pid) {
      console.log('in Routers.Games#show');
      console.log('this.collection=' + JSON.stringify(this.collection.toJSON()));
      var model = this.collection.findWhere({ pid: parseInt(pid) });
      console.log('router#show with pid=' + pid + ', model=' + JSON.stringify(model));
      if (model) {
        var view = new ZmachineClient.Views.PlayGame({
          model: model
        });
        this.$container.html(view.render().el);
      }
      else {
        ZmachineClient.helpers.showError('Could not find a game with PID ' + pid);
        Backbone.history.navigate('games/new');
      }
    }

  });

})();
