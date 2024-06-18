const router = require('express').Router();
const projetosRouter = require('./projetos');

router.use('/projetos', projetosRouter);

module.exports = router;