var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./server.properties');

function search(term) {
  properties.get();
}

module.exports = {
  search : search
}