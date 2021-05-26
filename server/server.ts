var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var fs = require('fs');
var mongoose = require('mongoose');

// var logger = require('morgan');

// var notesRouter = require('./routes/notes');

var app = express();

mongoose.connect('mongodb+srv://notesUser:xHZoByv9pBnyaXRS@cluster0.qbgk6.mongodb.net/NotesApp?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch(() => {
    console.log('failed to connect');
  });

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
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(req.url);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error: ' + err.message);
});

module.exports = app;
