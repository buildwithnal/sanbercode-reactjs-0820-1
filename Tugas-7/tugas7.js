// Jawab soal pertama
// Release 0
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
}

let sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

console.log();

// Release 1
class Frog extends Animal {
  jump() {
    return "Auooo";
  }
}

class Ape extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.legs = 2;
  }

  yell() {
    return "Hop hop";
  }
}

let sungokong = new Ape("kera sakti");
console.log(sungokong.name); // Kera sakti
console.log(sungokong.yell()); // "Auooo"
console.log(sungokong.legs); // 2

let kodok = new Frog("buduk");
console.log(kodok.name); // "Buduk"
console.log(kodok.jump()); // "hop hop"

console.log();

// Jawab soal kedua
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    const output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
    return output;
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
