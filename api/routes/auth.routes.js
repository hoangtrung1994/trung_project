const util = require('../lib/utils');
const auth = require('../controllers/auth/');
//const passport = require('passport');

require('../../services/passport');

module.exports = function (app) {
    app.options('/api/account/*', util.asJSON, util.options);
    app.post('/api/account/signup', util.asJSON, auth.signUp);    
}