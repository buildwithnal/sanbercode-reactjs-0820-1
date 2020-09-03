const readBooks = require("./callback.js");

let books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

const doneRead = (books, time, indexStart) => {
  readBooks(time, books[indexStart], (timeSpent) => {
    if (timeSpent > 0) {
      let newIndex = indexStart + 1;
      doneRead(books, timeSpent, newIndex);
    }
  });
};

doneRead(books, 10000, 0);
