process.env.NODE_ENV = 'test';

const wtf = require('wtfnode');
const knex = require('../config/database'); // FIX THIS
const chai = require('chai');
const assert = chai.assert;
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

const {app, server} = require('../server');
// const request = chai.request(app);

// after(() => request.app.close());

describe('API requests', function() {
  describe('HTTP GET /sightings', function() {
    it('returns a status of 200 and an array of three objects', function(done) {
      chai.request(app)
        .get('/api/sightings')
        .end(function(error, response) {
          assert.strictEqual(response.status, 200, 'Status should be 200.');
          assert.isArray(response.body, 'Response body should be an array');
          assert.lengthOf(response.body, 3, 'Array should contain three items.');
          assert.isObject(response.body[0], 'First array item should be an object');
          assert.strictEqual(response.body[0].celebrity, 'Rowan Atkinson', 'First celebrity should be Rowan Atkinson');
          done();
        });
    });
  });

  describe('HTTP GET /sighting', function() {
    it('returns a status of 200 and a single object', function(done) {
      chai.request(app)
        .get('/api/sightings/3')
        .end(function(error, response) {
          assert.strictEqual(response.status, 200, 'Status should be 200.');
          assert.isObject(response.body, 'Response should be an object');
          // done();
          // console.info(knex);
          knex.destroy()
            .then(() => {
              server.close();
              done();
              wtf.dump();
            })
            .catch(error => { console.error(error); });
        });
    });
  });
});
