const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servindo o arquivo homepage.html
app.get('/homepage.html', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});

// Configurando o redirecionamento para /
app.get('/', (req, res) => {
  res.redirect('/homepage.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
