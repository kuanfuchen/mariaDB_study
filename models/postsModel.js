const { DataTypes } = require('sequelize');
const sequelize = require('../connection/index');
const Posts = sequelize.define('order', {
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey: true,
    autoIncrement: true
    // unique:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  timestamps: true,
});
module.exports = {Posts, sequelize};