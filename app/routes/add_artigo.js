module.exports = (app) => {
  app.get('/adicionar_artigo', (req, res) => {
   app.app.controllers.add_artigo.add_artigo(app, req, res)
  })
}