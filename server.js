const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('../server/api/config/config');
const keys = require('../server/keys/init');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const passport = require('passport');
const setUserOnLocalsMiddleware = require('../server/middleware/user-local');
const app = express();

mongoose.Promise = global.Promise;

const db = require('./api/config/config').mongo.connectionString;

mongoose
    .connect(db , { useNewUrlParser: true})
    .then(() => console.log('mongoconnected'))
    .catch(err => console.log);

const PORT = 3000;

console.log("Server is running " + PORT);
//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
    store: new MongoStore({ url: config.mongo.connectionString}),
    secret: keys.secret,
    maxAge: 60 * 60 * 1000, 
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, 
        maxAge: 216000000
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(setUserOnLocalsMiddleware());

app.listen(process.env.PORT || PORT);

require('./api/routes')(app);

return app;
