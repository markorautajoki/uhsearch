var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./server.properties');

var request = require('request');

function search(term) {
  var searchUrl = properties.get('search.url');
  searchUrl += '/focus/api?method=searchc&lang=fi&format=json&max=10&query=';

  request(searchUrl + term, function (error, response, body) {
    console.log(body);
  });
}

module.exports = {
  search : search
}