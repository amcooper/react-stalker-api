process.env.NODE_ENV = test;

const chai = require('chai');
const assert = chai.assert();
const chaiHTTP = require('chai-http');
const server = require('../app');

chai.use(chaiHTTP);

describe('API requests', function() {
});
