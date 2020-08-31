// jawab soal pertama
const luasLingkaran = (jariJari) => {
  let pi = jariJari % 7 === 0 ? 22 / 7 : 3.14;
  return pi * jariJari * jariJari;
};

const kelilingLingkaran = (jariJari) => {
  let pi = jariJari % 7 === 0 ? 22 / 7 : 3.14;
  return 2 * pi * jariJari;
};
console.log("luas lingkaran dari jari-jari 7 adalah " + luasLingkaran(7));
console.log(
  "keliling lingkaran dari jari-jari 7 adalah " + kelilingLingkaran(7)
);

console.log();

// jawab soal kedua
let kalimat = "";

let kata1 = "saya";
let kata2 = "adalah";
let kata3 = "seorang";
let kata4 = "frontend";
let kata5 = "developer";

const tambahKata = () => {
  kalimat += `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
  return kalimat;
};
console.log(tambahKata());

console.log();

// jawab soal ketiga
const newFunction = function literal(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`${firstName} ${lastName}`);
      return;
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName();

console.log();

// jawab soal keempat
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation);

console.log();

// jawab soal kelima
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];

//Driver Code
console.log(combined);
