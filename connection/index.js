const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const sequelize = new Sequelize('hotels'/* 自己資料庫名稱 */, process.env.DATABASE_KEY, process.env.DATABASE_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'sqlite'//依照自己要連接的資料庫
});
sequelize.authenticate().then(() => console.log('connect database'))
  .catch((err) => console.log('error', err));
  
module.exports = sequelize;