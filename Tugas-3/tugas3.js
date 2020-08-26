// jawab soal pertama
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kapital = kataKedua.slice(0, 1).toLocaleUpperCase() + kataKedua.slice(1);

var upper = kataKeempat.toLocaleUpperCase();

console.log(kataPertama + " " + kapital + " " + kataKetiga + " " + upper);

// jawab soal kedua
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var jumlah =
  Number(kataPertama) +
  Number(kataKedua) +
  Number(kataKetiga) +
  Number(kataKeempat);

console.log(jumlah);

// jawab soal ketiga
var kalimat = "wah javascript itu keren sekali";
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// jawab soal keempat
var nilai = 75;
var indeks;

if (nilai >= 80) {
  indeks = "A";
} else if (nilai >= 70 && nilai < 80) {
  indeks = "B";
} else if (nilai >= 60 && nilai < 70) {
  indeks = "C";
} else if (nilai >= 50 && nilai < 60) {
  indeks = "D";
} else if (nilai < 50) {
  indeks = "E";
}

console.log(indeks);

//jawab soal kelima
var tanggal = 7;
var bulan = 7;
var tahun = 1994;

switch (bulan) {
  case 1:
    bulan = "Januari";
    break;
  case 2:
    bulan = "Februari";
    break;
  case 3:
    bulan = "Maret";
    break;
  case 4:
    bulan = "April";
    break;
  case 5:
    bulan = "Mei";
    break;
  case 6:
    bulan = "Juni";
    break;
  case 7:
    bulan = "Juli";
    break;
  case 8:
    bulan = "Agustus";
    break;
  case 9:
    bulan = "September";
    break;
  case 10:
    bulan = "Oktober";
    break;
  case 11:
    bulan = "November";
    break;
  case 12:
    bulan = "Desember";
    break;
}

var date = tanggal + " " + bulan + " " + tahun;

console.log(date);
