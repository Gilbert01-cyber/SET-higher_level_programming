#!/usr/bin/node
const request = require('request');

function printCharacter (characters, index) {
  if (index >= characters.length) {
    return;
  }
  request.get(characters[index], (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.parse(body).name);
      printCharacter(characters, index + 1);
    }
  });
}

const url = 'https://swapi-api.alx-tools.com/api/films/' + process.argv[2];

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    printCharacter(JSON.parse(body).characters, 0);
  }
});
