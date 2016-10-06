/*global ZmachineClient, Backbone, JST*/

ZmachineClient.Views = ZmachineClient.Views || {};

(function () {
  'use strict';

  ZmachineClient.Views.PlayGame = Backbone.View.extend({

    template: JST['app/scripts/templates/play_game.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template({game: this.model}));
      return this;
    }

  });

})();
