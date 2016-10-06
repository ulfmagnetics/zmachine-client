/*global ZmachineClient */

(function () {
  'use strict';

  ZmachineClient.helpers = {

    debug: function (collection) {
      collection.on('all', function () {
        $('#debug').text(JSON.stringify(collection.toJSON(), null, 4));
      });
      collection.trigger('reset');
    },

    hideErrors: function() {
      $('.alert').empty().hide();
    },

    showError: function(html) {
      $('.alert').html(html).show();
    },

    showErrors: function (note, errors) {
      $('.has-error').removeClass('has-error');
      $('.alert').html(_.values(errors).join('<br>')).show();

      // highlight the fields with errors
      _.each(_.keys(errors), function (key) {
        $('*[name=' + key + ']').parent().addClass('has-error');
      });
    }
  };
}());
