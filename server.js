const express       = require('express');
const path          = require('path');
const favicon       = require('serve-favicon');
const logger        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const helmet        = require('helmet');
const cors          = require('cors');
const mongoose      = require('mongoose');
const passport      = require('passport');
const flash         = require('connect-flash');
const app           = express();
const session       = require('express-session');

// Load .env file
require('dotenv').config();

// MongoDB config
const DBconfig = require('./config/database')
mongoose.Promise = global.Promise;
mongoose.connect(DBconfig.getDBConnectionString());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware Setup
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

// Pass passport for configuration
require('./config/passport')(passport);

// Required for passport
app.use(session({
  secret: 'MoinsTuDors+TuEsFort',
  saveUninitialized: true,
  resave: true
})); // Session secret
app.use(passport.initialize());
app.use(passport.session()); // Persistent login sessions
app.use(flash()); // Use connect-flash for flash messages stored in session


// Security Setup
app.use(helmet.frameguard()); // Default Value - Help to secure request by putting some setting in the header
app.use(cors());

// API Key handler
const apiKey = require('./config/apiKey');
// app.use(apiKey);

// Routes
require('./app/routes/index')(app, passport);
// app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
