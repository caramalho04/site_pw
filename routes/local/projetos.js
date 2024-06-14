const projetosRouter = require('express').Router();
const controller = require('../../controllers/local/projetos');

//CRUD para o projeto
projetosRouter.get('/', controller.getAll); //le todos
projetosRouter.get('/:id', controller.getById); //le 1 projeto pelo id
projetosRouter.post('/create', controller.create); //criar um novo projeto
projetosRouter.put('/update', controller.update); //atualizar um projeto
projetosRouter.delete('/delete/:id', controller.delete); //apagar um projeto pelo id

module.exports = projetosRouter;
