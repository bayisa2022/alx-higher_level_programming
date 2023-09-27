#!/usr/bin/node

const request = require('request');
const urlApi = process.argv[2];
const filePath = process.argv[3];

request(urlApi, function (error, response, body) {
  if (error) {
    console.log(error); // Print the error if one occurred
  } else {
    const fs = require('fs');

    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
});
