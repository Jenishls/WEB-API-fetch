// const request = require('request')
require('http').request();

let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=45b0542cd58649ba8e2eb7d9796746f9';

// var url = require('url');
let req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })