const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const promisify = require('es6-promisify');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const sassMiddleware = require('node-sass-middleware')


const routes = require('./routes');
const users = require('./routes/users');
const errorHandlers = require('./handlers/errorHandlers');
require('./handlers/passport.js');

const app = express();

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public/stylesheets'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true,
  debug: true,
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser());


app.use(session({
	secret: process.env.SECRET,
	key: process.env.KEY,
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({ mongooseConnection: mongoose.connection})
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

/*app.use((req, res, next) => {
	res.locals.flashes = req.flash();
});*/




app.use((req, res, next) => {
	res.locals.user = req.user || null;
	next();
});

app.use('/', routes);
app.use('/users', users);

app.use(errorHandlers.notFound);
//app.use(errorHandlers.flashValidationErrors);

if(app.get('env') === 'development') {
	app.use(errorHandlers.developmentErrors);
}


module.exports = app;
