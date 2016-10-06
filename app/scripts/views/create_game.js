/*global ZmachineClient, Backbone, JST*/

ZmachineClient.Views = ZmachineClient.Views || {};

(function () {
  'use strict';

  ZmachineClient.Views.CreateGame = Backbone.View.extend({

    template: JST['app/scripts/templates/create_game.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click button.save': 'save'
    },

    initialize: function () {
      this.allGames = new ZmachineClient.Collections.Games(
        ZmachineClient.Collections.Games.allAvailableGames()
      );
      this.listenTo(this.allGames, 'change', this.render);
      this.listenTo(this.model, 'change:pid', this.beginGame);
      ZmachineClient.helpers.hideErrors();
    },

    render: function () {
      // create a dummy collection of available games, since the API doesn't support this
      this.$el.html(this.template({games: this.allGames}));
      return this;
    },

    save: function(event) {
      event.stopPropagation();
      event.preventDefault();

      this.model.set({
        name: this.$el.find('input:checked[name=name]').val()
      });

      if (this.model.isValid()) {
        // spawn a new game on the server
        this.collection.create(this.model, {ajaxSync: true});
      }
    },

    beginGame: function(event) {
      // FIXME this.model contains the first line of the story now...
      // how do we pass it along to the "play game" view? session/cookie?
      this.model.save();
      Backbone.history.navigate('games/' + this.model.get('pid'), {trigger: true});
    },

  });

})();
