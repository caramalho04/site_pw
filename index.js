const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;

// Defina a pasta onde os arquivos estáticos (HTML, CSS, JS, etc.) estão localizados
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a raiz do servidor, redirecionando para homepage.html
app.get('/', (req, res) => {
    res.redirect('/homepage.html');
});

// Rota para redirecionar para homepage.html
app.get('/frontEnd/homepage.html', (req, res) => {
    res.redirect('/homepage.html');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
