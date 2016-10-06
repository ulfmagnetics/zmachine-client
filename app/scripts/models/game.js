/*global ZmachineClient, Backbone*/

ZmachineClient.Models = ZmachineClient.Models || {};

(function () {
  'use strict';

  ZmachineClient.Models.Game = Backbone.Model.extend({

    idAttribute: 'pid',

    initialize: function() {
      this._actions = new ZmachineClient.Collections.Actions();
      // FIXME there must be a better way to store a reference to the parent game...
      this._actions.setGame(this);
    },

    actions: function() {
      return this._actions;
    },

    defaults: function() {
      return {
        'label': new Date().toISOString()
      };
    },

    validate: function(attrs, options) {
      var errors = {};
      if (!attrs.name) { errors.name = 'Name is a required field.'; }
      if (!_.isEmpty(errors)) { return errors; }
    },

    parse: function(response, options)  {
      console.log('Game#parse: response=' + JSON.stringify(response));
      if (response.data) {
        var action = new ZmachineClient.Models.Action({
          pid: this.get('pid'),
          status: response.data
        });
        this._actions.create(action);
        delete response.data;
      }
      return response;
    },

    // NOTE: This is required to use the master branch of zmachine-api,
    //       but it breaks the event triggers required for navigation.
    //       Use the 'restful' branch instead!
    //sync: function(method, model, opts) {
    //  if (method === 'create') {
    //    // warp the request to match the non-RESTful API semantics
    //    model.set('game', model.get('name'));
    //    model.unset('name');
    //  }
    //  console.log(method + ': ' + JSON.stringify(model.toJSON()));
    //  Backbone.sync(method, model, opts);
    //},

    description: function() {
      return this.get('label') + ' (' + this.get('name') + ')';
    }
  });

})();
