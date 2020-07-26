/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books',
  (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < 10; i++) {
      console.log(json[i].id + json[i].name);
    }
  },
);
