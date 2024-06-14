const privadoRouter = require('express').Router();


// Define uma rota para a página HTML
privadoRouter.get('/gerirProjetos', (req, res) => {
    // Envie o arquivo HTML como resposta para a solicitação HTTP
    res.sendFile('/Users/franc/Desktop/site_pw/site_pw/templates/frontEnd/meusprojetos.html');
  });

  // Define uma rota para a página HTML
privadoRouter.get('/gerirTarefas', (req, res) => {
  // Envie o arquivo HTML como resposta para a solicitação HTTP
  res.sendFile('/Users/franc/Desktop/site_pw/site_pw/templates/frontEnd/tarefas.html');
});


module.exports = privadoRouter;