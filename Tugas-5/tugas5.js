// jawab soal pertama
function halo() {
  return str;
}

var str = "Halo Sanbers!";
console.log(halo());

console.log();

// jawab soal kedua
function kalikan(num1, num2) {
  return num1 * num2;
}

var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

console.log();

// jawab soal ketiga
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    ", dan saya punya hobby yaitu " +
    hobby
  );
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

console.log();

// jawab soal keempat
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
var result = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  lahir: arrayDaftarPeserta[3],
};
console.log(result);

console.log();

// jawab soal kelima
var dataBuah = [
  {
    nama: "strawberry",
    warna: "merah",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "semangka",
    warna: "hijau & merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "pisang",
    warna: "kuning",
    adaBijinya: false,
    harga: 5000,
  },
];
console.log(dataBuah[0]);

console.log();

// jawab soal keenam
var dataFilm = [];

var obj = {
  nama: "Avengers",
  durasi: "3 jam",
  genre: "Action",
  tahun: 2019,
};

function addFilm() {
  dataFilm.push(obj);

  return dataFilm;
}

console.log(addFilm());
