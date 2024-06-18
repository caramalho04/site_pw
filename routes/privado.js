const path = require('path');
const express = require('express');
const privadoRouter = express.Router();

// Define uma rota para a página HTML
privadoRouter.get('/Equipas.html', (req, res) => {
  // Use o método path.join para resolver o caminho absoluto do arquivo HTML
  res.sendFile(path.join(__dirname, '../frontEnd' ,'Equipas.html'));
});

privadoRouter.get('/perfil.html', (req, res) => {
  // Use o método path.join para resolver o caminho absoluto do arquivo HTML
  res.sendFile(path.join(__dirname, '../frontEnd' ,'perfil.html'));
});

privadoRouter.get('/meusprojetos.html', (req, res) => {
  // Use o método path.join para resolver o caminho absoluto do arquivo HTML
  res.sendFile(path.join(__dirname, '../frontEnd' ,'meusprojetos.html'));
});

privadoRouter.get('/tarefas.html', (req, res) => {
  // Use o método path.join para resolver o caminho absoluto do arquivo HTML
  res.sendFile(path.join(__dirname, '../frontEnd' ,'tarefas.html'));
});


module.exports = privadoRouter;

