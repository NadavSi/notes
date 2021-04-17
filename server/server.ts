var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var fs = require('fs');
// var logger = require('morgan');

// var notesRouter = require('./routes/notes');

var app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

var routePath="./routes/";
fs.readdirSync(routePath).forEach(function(file) {
  var route = routePath + file;
  console.log(route);
  app.use('/', require(route));
});
// app.use('/', require('./routes/notes.js'));

app.listen(3000, '127.0.0.1', function () {
  console.log('init server');
})
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
  res.render('error');
});

module.exports = app;
