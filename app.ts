let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

require('./db');

let indexRouter = require('./routes/index');
let populationRouter = require('./routes/population');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/population', populationRouter);

module.exports = app;
