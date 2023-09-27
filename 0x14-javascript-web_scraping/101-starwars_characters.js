#!/usr/bin/node

const request = require('request');
const urlApi = 'https://swapi.co/api/films/' + process.argv[2];

request(urlApi, function (error, response, body) {
  if (error) {
    console.error(error); // Print the error if one occurred
  }
  const charUrl = JSON.parse(body).characters;
  console.log(charUrl)
  for (let i = 0; i < charUrl.length; i++) {
    await request(charUrl[i], function (error, response, body) {
      if (error) {
        console.error(error); // Print the error if one occurred
      }
      console.log(JSON.parse(body).name);
    });
  }
});
