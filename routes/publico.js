const express = require('express');
const path = require('path');
const publicoRouter = express.Router();

// Define uma rota para a página HTML principal
publicoRouter.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'homepage.html'));
});

// Outras rotas para os arquivos HTML específicos
publicoRouter.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'login.html'));
});
publicoRouter.get('/projeto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'projeto.html'));
});

publicoRouter.get('/create_account.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'create_account.html'));
});

publicoRouter.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontEnd', 'about.html'));
});


// etc, adicione outras rotas conforme necessário

module.exports = publicoRouter;
