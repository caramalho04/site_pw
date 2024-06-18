const router = require('express').Router();
const projetosRouter = require('./projetos');
const authRouter = require('./auth');

router.use('/auth', authRouter);
router.use('/projetos', projetosRouter);

module.exports = router;
