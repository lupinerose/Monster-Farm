import { Monster } from './../src/monsterFarm.js';

describe('Monster', function() {
  let monty;

  beforeEach(function() {
    monty = new Monster("Monty");
    jasmine.clock().install();
    monty.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 15 when it is created', function() {
    expect(monty.name).toEqual("Monty");
    expect(monty.hunger).toEqual(15);
  });

  it('should have a hunger of 12 after 6001 milliseconds', function() {
    jasmine.clock().tick(6001);
    expect(monty.hunger).toEqual(12);
  });

});
