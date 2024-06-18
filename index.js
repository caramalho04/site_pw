const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Definindo a pasta onde os arquivos estáticos (HTML, CSS, JS, etc.) estão localizados
app.use(express.static(path.join(__dirname, 'public')));

// Rota para redirecionar /frontEnd/homepage.html para homepage.html
app.get('/frontEnd/homepage.html', (req, res) => {
    res.redirect('/homepage.html');
});

// Rota para a raiz do servidor, redirecionando para homepage.html
app.get('/', (req, res) => {
    res.redirect('/homepage.html');
});


app.listen(port, () => {
 console.log(`App listening at http://localhost:4242`);
});
