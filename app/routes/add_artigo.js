let dbConnection = require('../../config/dbConnection');

module.exports = (app) => {
  let connection = dbConnection();

  app.get('/adicionar_artigo', (req, res) => {
    res.render('add_artigo')
  })

  app.post('/adicionarArtigo', (req, res) => {
    const titulo = req.body.titulo;
    const resumo = req.body.resumo;
    const texto = req.body.texto;
    const categoria = req.body.categoria;
    const sql = 'INSERT INTO artigos (titulo, resumo, texto, categoria) VALUES (?, ?, ?, ?)';
    const values = [titulo, resumo, texto, categoria];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        res.status(500).send('Erro ao inserir dados');
      } else {
        console.log('Dados inseridos com sucesso');
        res.send('Dados inseridos com sucesso');
      }
    });
  });
}

