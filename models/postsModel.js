const { DataTypes } = require('sequelize');
const sequelize = require('../connection/index');
//MariaDB建立資料表，其資料表的名稱必須 + s
const Posts = sequelize.define('list' /* order為資料表 */, {
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true,
    // defaultValue:332211
    // unique:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  timestamps: true,
  // createdAt:false,
  // updatedAt:'updateTimestamp'
});
module.exports = {Posts, sequelize};