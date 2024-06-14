const tarefasRouter = require('express').Router();
const controller = require('../../controllers/local/tarefas');

//CRUD para o tarefa
tarefasRouter.get('/', controller.getAll); //le todos
tarefasRouter.get('/:id', controller.getById); //le 1 tarefa pelo id
tarefasRouter.post('/create', controller.create); //criar um novo tarefa
tarefasRouter.put('/update', controller.update); //atualizar um tarefa
tarefasRouter.delete('/delete/:id', controller.delete); //apagar um tarefa pelo id

module.exports = tarefasRouter;
