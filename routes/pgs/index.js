const router = require('express').Router();

const controller = require('../../controllers/pgs/projetos');

router.get('/testeConn', controller.getAll); 

module.exports = router;