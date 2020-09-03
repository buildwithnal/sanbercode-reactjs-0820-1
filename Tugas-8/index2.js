var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

doneRead = () => {
  readBooksPromise(10000, books[0]).then((time) => {
    readBooksPromise(time, books[1]).then((time) => {
      readBooksPromise(time, books[2]);
    });
  });
};

doneRead();
