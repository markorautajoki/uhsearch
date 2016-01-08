var express = require('express');
var app = express();
var searchService = require('./service/search.service.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/search/:term', function (req, res) {
  var searchResult = searchService.search(req.params.term);
  res.send(searchResult);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
