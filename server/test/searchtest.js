var request = require('supertest');
var server = require('../server.js');
var assert = require('assert');

var searchApiMock = require('./mock/searchapimock.js');

describe('searchApi', function() {
  it('responds 200 ok when searching for kissa', function(done) {

    var queryParams = {
      method: 'searchc',
      lang : 'fi',
      format : 'json',
      max : 10,
      query : 'kissa'
    };

    var response = {"title" : "Katti", "description" : "Musta kissa"};

    searchApiMock(queryParams, 200, response);

    request(server)
      .get('/search/kissa')
      .expect(function(res) {
        assert.equal(JSON.parse(res.body).title, 'Katti');
        assert.equal(JSON.parse(res.body).description, 'Musta kissa');
      })
      .expect(200,done);
  });
});