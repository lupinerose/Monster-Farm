export class Monster {
  constructor (name, type){
    this.name = name;
    this.type = type;
    // this.strength = Math.floor((Math.random()*20) + 1);
    this.hunger = 15;
    this.thirst = 20;
    this.sleep = 10;
  }

  setHunger() {
    setInterval(() => {
      this.hunger--;
    }, 2000);
  }

  setThirst() {
    setInterval(() => {
      this.thirst--;
    }, 3000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 10000);
  }

  encourageMints() {
    setTimeout(() => {
      return "You're doing great!";
    }, 30000);
    setTimeout(() => {
      return "Keep it up!";
    }, 150000);
    setTimeout(() => {
      return "Wow! No monsters have eaten you...yet?";
    }, 300000);
  }

  warning() {
    if (this.sleep === 1){
      return(`${this.name} is sleepy!!`);
    }
    if (this.hunger === 2){
      return(`${this.name} is hungry!!`);
    }
    if (this.thirst === 5){
      return(`${this.name} is thursty!!`);
    }
  }

  didYouGetEaten() {
    if (this.hunger > 0) {
      return false;
    } else {
      return true;
    }
  }

  didMonsterDieOfThirst() {
    if (this.thirst > 0) {
      return false;
    } else {
      return true;
    }
  }

  didMonsterKillYouFromSleepCraze() {
    if (this.sleep > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed(amount) {
      return (food) => {
      this.hunger += amount;
      if(amount === 0)
      {
        return `${this.name} the monster ate the ${food}! Food level stays the same!`;
      } else if(amount > 0)
        {
          return `${this.name} the monster ate the ${food}! Food level goes up ${amount}!`;
        } else if(amount < 0)
        {
          return `${this.name} the monster ate the ${food}! Food level goes down ${amount}!`;
        }
    }
  }

  eatSnack(food) {
    // console.log(food);
    //
    // let feedfunction = this.feed(2);
    //
    //
    // let feedfunction = (food) => {
    //   console.log(food);
    //   console.log(amount);
    //   console.log(this);
    // this.hunger += amount;
    // return `${this.name} the monster ate the ${food}! Food level goes up ${amount}!`;
    //
    //
    // feedfunction(food);

    return this.feed(2)(food);
  }

  eatYum(yum) {
    return this.feed(10)(yum);
  }

  eatYuck(yuck) {
    return this.feed(-10)(yuck);
  }

  eatRandom(mysteryFood) {
    let randomFood = Math.floor(Math.random()*20) + 1;
    randomFood *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return this.feed(randomFood)(mysteryFood)
  }

  getHydrated(amount) {
    return (liquid) => {
      this.thirst += amount;
      if(amount === 0)
      {
        return `${this.name} the monster drank the ${liquid}! Hydration level stays the same!`;
      } else if (amount > 0)
      {
        return `${this.name} the monster drank the ${liquid}! Hydration level goes up ${amount}!`;
      } else if (amount < 0)
      {
        return `${this.name} the monster drank the ${liquid}! Hydration level goes down ${amount}!`;
      }
    }
  }

  drinkWater(water) {
    return this.getHydrated(5)(water);
  }

  drinkPedialyte(pedialyte) {
    return this.getHydrated(15)(pedialyte);
  }

  drinkGasoline(gasoline) {
    return this.getHydrated(-16)(gasoline);
  }

  drinkMystery(mystery) {
    let randomLiq = Math.floor(Math.random()*20) + 1;
    randomLiq *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    return this.getHydrated(randomLiq)(mystery);
  }

  replenishSleep(amount) {
    return (type) => {
      this.sleep += amount;
      if (amount > 0)
      {
        return `${this.name} the monster had a ${type}! Recharge level goes up ${amount}!`;
      } else if (amount < 0)
      {
        return `${this.name} the monster had a ${type}! Recharge level goes down ${amount}!`;
      }
    }
  }

  sleepNap(nap) {
    return this.replenishSleep(2)(nap);
  }

  sleepNightMare(nightmare) {
    return this.replenishSleep(-5)(nightmare);
  }

  sleepThruNight(rest) {
    return this.replenishSleep(10)(rest);
  }

  isGameOver(){
    if (this.hunger <= 0) {
      return true;
    }
    if (this.thirst <= 0) {
      return true;
    }
    if (this.sleep <= 0) {
      return true;
    }
    return false;
  }

}
