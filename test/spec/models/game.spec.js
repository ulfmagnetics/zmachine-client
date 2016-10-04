/*global beforeEach, describe, it, assert, expect, ZmachineClient */
'use strict';

describe('Game Model', function () {

  beforeEach(function () {
    this.GameModel = new ZmachineClient.Models.Game();
  });

  it('creates global variables', function() {
    expect(ZmachineClient).to.be.exist;
  });

  it('has expected test setup', function() {
    expect(2+2).to.equal(4);
  });
});
