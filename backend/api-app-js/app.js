var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var boardRouter = require('./routes/api/boardRouter');
var listTaskRouter = require('./routes/api/listTaskRouter');
var cardTaskRouter = require('./routes/api/cardTaskRouter');
var userRouter = require('./routes/api/userRouter');

var app = express();
app.use(cors())


require('./lib/connectMongoose');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Api routers
app.use('/apiv1/boards', boardRouter);
app.use('/apiv1/list-tasks', listTaskRouter);
app.use('/apiv1/card-tasks', cardTaskRouter);
app.use('/apiv1/users', userRouter);



// Browser routers
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if (isAPIRequest(req)) {
    return res.json({ error: err.message });
  }

  res.render('error');
});

function isAPIRequest(req) {
  return req.originalUrl.indexOf('/api/') === 0;
}


module.exports = app;