// jawab soal pertama
console.log("LOOPING PERTAMA");
var angka = 2;
while (angka <= 20) {
  console.log(angka + " - I love coding");
  angka += 2;
}

console.log("LOOPING KEDUA");
var angka = 20;
while (angka > 0) {
  console.log(angka + " - I will become a frontend developer");
  angka -= 2;
}

console.log();

// jawab soal kedua
var angka;
for (angka = 1; angka <= 20; angka++) {
  if (angka % 2 === 0) {
    console.log(angka + " - Berkualitas");
  } else if (angka % 3 === 0 && angka % 1 === 0) {
    console.log(angka + " - I Love Coding");
  } else {
    console.log(angka + " - Santai");
  }
}

console.log();

// jawab soal ketiga
var segitiga = "";
for (var i = 1; i <= 7; i++) {
  for (var j = 1; j <= i; j++) {
    segitiga += "#";
  }
  segitiga += "\n";
}
console.log(segitiga);

console.log();

// jawab soal keempat
var kalimat = "saya sangat senang belajar javascript";
var arr = kalimat.split(" ");
console.log(arr);

console.log();

// jawab soal kelima
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

var str = "";
for (var i = 0; i < daftarBuah.sort().length; i++) {
  str += daftarBuah[i] + "\n";
}
console.log(str);
