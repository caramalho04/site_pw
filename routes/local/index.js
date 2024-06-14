const router = require('express').Router();
const projetosRouter = require('./projetos');
const tarefasRouter = require('./tarefas');

router.use('/projetos', projetosRouter);
router.use('/tarefas', tarefasRouter);
module.exports = router;
