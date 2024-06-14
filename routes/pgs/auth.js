const router = require('express').Router();
const authRouter = require('./auth');
const projetosRouter = require('./projetos');

router.use('/auth', authRouter);
router.use('/projetos', projetosRouter);


module.exports = router;