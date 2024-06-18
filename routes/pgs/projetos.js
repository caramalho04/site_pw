const projetosRouter = require('express').Router();
const controller = require('../../controllers/pgs/projetos');

//testa a ligação à BD
projetosRouter.get('/testeConn', controller.testConnection);

//CRUD para projetos
projetosRouter.get('/', controller.getAll); //le todos');
projetosRouter.get('/:id', controller.getById); //le um projeto indicado pelo id
projetosRouter.post('/create', controller.create); //criar um projeto
projetosRouter.put('/update', controller.update); //atualizar um projeto
projetosRouter.delete('/delete/:id', controller.delete); //apagar um projeto



module.exports = projetosRouter;
