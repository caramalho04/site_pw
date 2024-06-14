const express = require('express');
const path = require('path');
const publicoRouter = express.Router();

// Define uma rota para a página HTML principal
publicoRouter.get('/homepage.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'homepage.html'));
});

// Outras rotas para os arquivos HTML específicos
publicoRouter.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'about.html'));
});

publicoRouter.get('/projeto.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'projeto.html'));
});

publicoRouter.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'login.html'));
});

publicoRouter.get('/create_account.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'create_account.html'));
});

publicoRouter.get('/perfil.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'perfil.html'));
});

publicoRouter.get('/meusprojetos.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'meusprojetos.html'));
});

publicoRouter.get('/Equipas.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'Equipas.html'));
});

publicoRouter.get('/tarefas.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/frontEnd/html', 'tarefas.html'));
});
// etc, adicione outras rotas conforme necessário

module.exports = publicoRouter;
