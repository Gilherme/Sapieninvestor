let dbConnection = require('../../config/dbConnection');

module.exports = (app) => {
  let connection = dbConnection();

  app.get('/', (req, res) => {

  connection.query('SELECT * FROM artigos', (err, result) => {
    res.render('index', {artigos: result})
  })
 
    // app.app.controllers.index.index(app, req, res)
  });
}