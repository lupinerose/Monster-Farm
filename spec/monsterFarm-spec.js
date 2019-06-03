import { Monster } from './../src/monsterFarm.js';

describe('Monster', function() {
  let monty;

  beforeEach(function() {
    monty = new Monster("Monty");
    jasmine.clock().install();
    monty.setHunger();
    monty.setThirst();
    monty.setSleep();
    monty.encourageMints();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, food level of 15, thirst level of 20, and a sleep level of 10 when it is created', function() {
    expect(monty.name).toEqual("Monty");
    expect(monty.hunger).toEqual(15);
    expect(monty.thirst).toEqual(20);
    expect(monty.sleep).toEqual(10);
  });

  it('should have a hunger of 12 after 6001 milliseconds', function() {
    jasmine.clock().tick(6001);
    expect(monty.hunger).toEqual(12);
  });

  it('should have a thirst level of 18 after 6001 milliseconds', function() {
    jasmine.clock().tick(6001);
    expect(monty.thirst).toEqual(18);
  });

  it('should have a sleep level of 5 after 50001 milliseconds', function() {
    jasmine.clock().tick(50001);
    expect(monty.sleep).toEqual(5);
  });

  it('should have a sleep level of 5 after 50001 milliseconds', function() {
    jasmine.clock().tick(50001);
    expect(monty.sleep).toEqual(5);
  });

  it('should get very hungry if the food level drops to zero', function() {
    monty.hunger = 0;
    expect(monty.didYouGetEaten()).toEqual(true);
  });

  it('should get very thirsty if the thirst level drops to zero', function() {
    monty.thirst = 0;
    expect(monty.didMonsterDieOfThirst()).toEqual(true);
  });

  it('should get very tired if the sleep level drops to zero', function() {
    monty.sleep = 0;
    expect(monty.didMonsterKillYouFromSleepCraze()).toEqual(true);
  });

  it('should return hunger level up by the amount corresponding to snack eaten', function() {
    expect(monty.eatSnack("human toes")).toEqual("Monty the monster ate the human toes! Food level goes up 2!");
  });

  it('should return hunger level up by the amount corresponding to yum eaten', function() {
    expect(monty.eatYum("Yummy")).toEqual("Monty the monster ate the Yummy! Food level goes up 10!");
  });

  it('should return hunger level down by the amount corresponding to yuck eaten', function() {
    expect(monty.eatYuck("Gross")).toEqual("Monty the monster ate the Gross! Food level goes down -10!");
  });

  it('should return thirst level up by the amount corresponding to water drunk', function() {
    expect(monty.drinkWater("water")).toEqual("Monty the monster drank the water! Hydration level goes up 5!");
  });

  it('should return thirst level up by the amount corresponding to pedialyte drunk', function() {
    expect(monty.drinkPedialyte("pedialyte")).toEqual("Monty the monster drank the pedialyte! Hydration level goes up 15!");
  });

  it('should return thirst level down by the amount corresponding to gasoline drunk', function() {
    expect(monty.drinkGasoline("gasoline")).toEqual("Monty the monster drank the gasoline! Hydration level goes down -16!");
  });

  it('should return sleep level up by the amount corresponding to a nap', function() {
    expect(monty.sleepNap("nap")).toEqual("Monty the monster had a nap! Recharge level goes up 2!");
  });

  it('should return sleep level down by the amount corresponding to a nightmare', function() {
    expect(monty.sleepNightMare("nightmare")).toEqual("Monty the monster had a nightmare! Recharge level goes down -5!");
  });

  it('should return sleep level up by the amount corresponding to a sleep throught the night', function() {
    expect(monty.sleepThruNight("rest")).toEqual("Monty the monster had a rest! Recharge level goes up 10!");
  });

  it('should return true when hunger equals 0', function() {
    monty.hunger = 0;
    expect(monty.isGameOver()).toEqual(true);
  });

  it('should return true when thirst equals 0', function() {
    monty.thirst = 0;
    expect(monty.isGameOver()).toEqual(true);
  });

  it('should return true when sleep equals 0', function() {
    monty.sleep = 0;
    expect(monty.isGameOver()).toEqual(true);
  });

});
