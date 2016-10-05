/*global beforeEach, describe, context, it, assert, expect, ZmachineClient */
'use strict';

describe('Game Model', function () {
  beforeEach(function () {
    this.pid = 1234;
    this.name = 'devours';
    this.zfile = 'devours.z5';
    this.label = 'All Things Devours';
    this.GameModel = new ZmachineClient.Models.Game({
      pid: this.pid, name: this.name, zfile: this.zfile, label: this.label
    });
  });

  it('creates global variables', function() {
    expect(ZmachineClient).to.be.exist;
  });

  describe('#description', function() {
    it('returns a human-readable description of the game', function() {
      expect(this.GameModel.description()).to.equal('All Things Devours (devours)');
    });
  });
});
