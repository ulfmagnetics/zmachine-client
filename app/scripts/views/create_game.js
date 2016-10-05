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
      this.listenTo(this.collection, 'change', this.render);
      this.listenTo(this.model, 'change:pid', this.beginGame);
    },

    render: function () {
      this.$el.html(this.template({games: this.collection}));
      return this;
    },

    save: function(event) {
      event.stopPropagation();
      event.preventDefault();

      this.model.set({
        name: this.$el.find('input:checked[name=name]').val()
      });

      if (this.model.isValid()) {
        this.model.save();
      }
    },

    beginGame: function(event) {
      console.log('begining game with PID ' + this.model.get('pid'));
      Backbone.history.navigate('games/' + this.model.get('pid'), {trigger: true});
    },

  });

})();
