const app = require('./config/server')

app.listen(1010, (err, result) => {
  if(err)throw err;
  console.log('Servidor on http://localhost:1010')
})

app.get('/', (req, res) => {
  res.render ('index');
});