/**
 * Local Dependencies
 */

const util = require('../lib/utils.js');
const test = require('../controllers/test/');

/**
 * Routes
 */

module.exports = function (app) {
    app.options('/api/test', util.asJSON, util.options);
    app.get('/api/test/', util.asJSON, test.returnData);
    app.get('/api/test/1/', util.asJSON, test.returnData2);
}

