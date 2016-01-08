var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('server/server.properties');

var request = require('request');

function search(term) {
  var searchUrl = properties.get('search.url');

  return new Promise(function(resolve, reject) {

    var requestParams = {
      method: 'searchc',
      lang : 'fi',
      format : 'json',
      max : 10,
      query : term
    }

    request({url: searchUrl, qs: requestParams}, function (error, response, body) {
      if(error) {
        console.log(response);
        reject(error);
      } else {
        console.log(response);
        resolve(body);
      }
    });
  });
}

module.exports = {
  search : search
}