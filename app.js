const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/posts');
const usersRouter = require('./routes/users');
const { connect } = require('http2');

const app = express();
process.on('uncaughtException',(err)=>{
  consoole.log(err);
  process.exit(1)
})
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/posts', indexRouter);
app.use('/users', usersRouter);

process.on('unhandledRejection', (reason, promise)=>{
  console.log({'Unhandled Rejection at':promise, '理由':reason});
})
module.exports = app;
