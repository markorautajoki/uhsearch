var express = require('express');
var app = express();
var searchService = require('./service/search.service.js');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/search/:term', function (req, res) {
  searchService.search(req.params.term).then(function (body) {
    res.send(body);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
