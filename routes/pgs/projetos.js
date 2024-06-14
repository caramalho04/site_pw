const projetosRouter = require('express').Router();
const controller = require('../../controllers/pgs/projetos');


projetosRouter.get('/testeConn', controller.testConnection); //le todos

module.exports = projetosRouter;
