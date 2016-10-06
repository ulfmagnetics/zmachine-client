/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Games Collection', function () {

  beforeEach(function () {
      this.GamesCollection = new ZmachineClient.Collections.Games();
  });

  describe('.allAvailableGames', function() {
    before(function() {
      this.availableGames = [
        { 'name': 'election', label: 'Election Evil!' },
        { 'name': 'banana', label: 'Gorilla Grodd and the Banana' }
      ];
      ZmachineClient.Config.availableGames = this.availableGames;
    });

    it('returns an array of available Game models', function() {
      var subject = ZmachineClient.Collections.Games.allAvailableGames();
      expect(_.size(subject)).to.equal(2);
      expect(subject[0].get('name')).to.equal('election');
      expect(subject[0].get('label')).to.equal('Election Evil!');
      expect(subject[1].get('name')).to.equal('banana');
    });
  });


});
