const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
// const mariadb = require('mariadb');
// require('./connection');

const indexRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const { connect } = require('http2');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
