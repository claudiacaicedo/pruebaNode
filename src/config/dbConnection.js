const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '134.209.39.125:33060',
    user: 'root',
    password: 'secret',
    database: 'news_portal'
  });
}
