/*global ZmachineClient, Backbone, JST*/

ZmachineClient.Views = ZmachineClient.Views || {};

(function () {
  'use strict';

  ZmachineClient.Views.CreateGame = Backbone.View.extend({

    template: JST['app/scripts/templates/create_game.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.collection, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template({games: this.collection}));
      return this;
    }

  });

})();
