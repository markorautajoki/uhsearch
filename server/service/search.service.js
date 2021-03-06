var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./server.properties');

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
        console.log(error);
        console.log(response);
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

module.exports = {
  search : search
}