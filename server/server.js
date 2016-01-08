var express = require('express');
var app = express();
var searchService = require('./service/search.service.js');

app.get('/search/:term', function (req, res) {
  searchService
    .search(req.params.term)
    .then(function (body) {
      res.send(body);
    })
    .catch(function(error) {
      res.status(400).send(error);
    });
});

app.listen(3000, function () {
  console.log('Search app listening on port 3000!');
})
