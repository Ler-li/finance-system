const { Sequelize } = require('sequelize');

// 数据库配置（你只需要改这里）
const sequelize = new Sequelize('test_db', 'root', '你的数据库密码', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  timezone: '+08:00' // 东八区
});

module.exports = sequelize;