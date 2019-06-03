export class Monster {
  constructor (name, type){
    this.name = name;
    this.type = type;
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
    }, 4000);
  }

  setSleep() {
    setInterval(() => {
      this.sleep--;
    }, 10000);
  }

  encourageMints() {
    setTimeout(() => {
      alert("You're doing great!");
    }, 30000);
    setTimeout(() => {
      alert("Keep it up");
    }, 150000);
    setTimeout(() => {
      alert("Wow! No monsters have eaten you...yet?");
    }, 300000);
  }

  warning() {
    if (this.sleep === 1){
      alert(`${this.name} is sleepy!!`)
    }
    if (this.hunger === 2){
      alert(`${this.name} is hungry!!`)
    }
    if (this.thirst === 5){
      alert(`${this.name} is thursty!!`)
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

  // feed() {
  //   this.hunger = 2;
  // }

}
