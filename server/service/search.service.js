var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./server.properties');

var request = require('request');

function search(term) {
  var searchUrl = properties.get('search.url');
  searchUrl += '/focus/api?method=searchc&lang=fi&format=json&max=10&query=';

  return new Promise(function(resolve, reject) {
    request(searchUrl + term, function (error, response, body) {
      resolve(body);
    });
  });
}

module.exports = {
  search : search
}