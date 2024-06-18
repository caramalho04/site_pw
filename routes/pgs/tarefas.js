const express = require('express');
const router = express.Router();
const tarefasController = require('../../controllers/pgs/tarefas');

router.post('/criar', tarefasController.criarTarefa);
router.get('/:id', tarefasController.obterTarefaPorId);
router.put('/atualizar/:id', tarefasController.atualizarTarefa);
router.delete('/apagar/:id', tarefasController.apagarTarefa);
router.get('/', tarefasController.listarTarefas);

module.exports = router;
