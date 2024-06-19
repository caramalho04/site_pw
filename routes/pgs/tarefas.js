const tarefasRouter = require('express').Router();
const controller = require('../../controllers/pgs/tarefas');

//testa a ligação à BD
tarefasRouter.get('/testeConn', controller.testConnection);

//CRUD para tarefas
tarefasRouter.get('/', controller.getAll); //le todos');
tarefasRouter.get('/:id', controller.getById); //le um tarefa indicado pelo id
tarefasRouter.post('/create', controller.create); //criar um tarefa
tarefasRouter.put('/update', controller.update); //atualizar um tarefa
tarefasRouter.delete('/delete/:id', controller.delete); //apagar um tarefa



module.exports = tarefasRouter;
