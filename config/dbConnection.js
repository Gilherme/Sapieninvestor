let mysql = require('mysql')

module.exports = (app) => {

return mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '1234',
  database: 'db_sapien'
  });
}
  

