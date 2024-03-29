const readlineSync = require('readline-sync');

// Fungsi untuk meminta pengguna menebak huruf
const tebakHuruf = (targetLetter) => {
  console.log("Halo! Saya telah memilih sebuah huruf. Cobalah tebak!");

  do {
    const guessedLetter = readlineSync.question("Tebakan Anda: ");

    if (guessedLetter.toLowerCase() === targetLetter.toLowerCase()) {
      console.log(`Selamat! Anda menebak huruf "${targetLetter}" dengan benar.`);
      return;
    } else {
      console.log("Tebakan Anda salah. Cobalah lagi.");
    }
  } while (true);
};

// Ekspor fungsi guessLetter agar bisa digunakan di luar modul
module.exports = tebakHuruf;
