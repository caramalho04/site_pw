const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;

// Define a pasta onde os arquivos estáticos (HTML, CSS, JS, etc.) estão localizados
app.use(express.static(path.join(__dirname, 'public')));

// Rota para redirecionar para homepage.html
app.get('/frontEnd/homepage.html', (req, res) => {
    res.redirect('/homepage.html');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
