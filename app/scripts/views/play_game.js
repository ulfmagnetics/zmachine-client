/*global ZmachineClient, Backbone, JST*/

ZmachineClient.Views = ZmachineClient.Views || {};

(function () {
  'use strict';

  ZmachineClient.Views.PlayGame = Backbone.View.extend({

    template: JST['app/scripts/templates/play_game.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click button.submit': 'submit'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template({game: this.model}));
      return this;
    },

    submit: function(event) {
      event.stopPropagation();
      event.preventDefault();

      // the API has very weird and non-restful semantics
      var action = new ZmachineClient.Models.Action({
        action: this.$el.find('input[name=action]').val()
      });

      this.model.actions().create(action, {ajaxSync: true});
    }

  });

})();
