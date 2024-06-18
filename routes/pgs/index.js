const router = require('express').Router();
const projetosRouter = require('./projetos');
const authRouter = require('./auth');

const router1 = createBrowserRouter  ([
    {
        path: "/",
        element: Home(),
    },
    {
        path:'/homepage',
        element: Teste()
    }
])

    



router.use('/auth', authRouter);
router.use('/projetos', projetosRouter);

module.exports = router;
