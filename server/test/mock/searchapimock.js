var nock = require('nock');

function createApiMock(queryParams, responseCode, responseBody) {
  nock('http://suositukset.student.helsinki.fi')
    .get('/focus/api')
    .query(queryParams)
    .reply(responseCode, responseBody);
}

module.exports = createApiMock;