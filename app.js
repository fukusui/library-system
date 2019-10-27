//MEAN Library Application//
var express = require('express'),
    engines = require('consolidate'),
    keystone = require('keystone'),
    serve = require('serve-static'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    multer = require('multer'),
    cors = require('cors'),
    path = require('path');

var keystoneConfig = require('./api/config/keystone'),
		dbUrl = require('./api/config/database');
		routes = require('./api/routes/index'),
		app = express();

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

//View Template//
app.set('views', path.join(__dirname, 'public/dist'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//Middleware//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(multer());

//Static assets//
app.use('/', express.static(path.join(__dirname, 'public/dist')));
app.use('static', express.static(path.join(__dirname, 'public/asset')));

//Routes//
// var router = express.Router();

var indexCtrl = require('./api/controllers/index');
app.get('/', indexCtrl.index);
app.get('/office', indexCtrl.index);
app.get('/office/login', indexCtrl.index);
app.use('/api', routes);

//Error Handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

//Keystone Setup//
keystone.set('mongo', dbUrl.db[process.env.NODE_ENV] ||
  "mongodb://localhost/fukusui-library");

keystone.set('cookie secret', process.env.COOKIE ||
  "keepthissecret");
keystone.set('port', process.env.PORT || 8000);
keystone.init(keystoneConfig);
keystone.import('api/models');
keystone.set('routes', app);
keystone.start();
//Export Server
module.exports = keystone;
