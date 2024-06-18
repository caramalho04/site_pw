const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
 res.send('Hello World! IPVC DEMO!  Realizado Por Francisco Caramalho Pedro Carvalho e João Vieira...');
});

app.listen(port, () => {
 console.log(`App listening at http://localhost:${port}`);
});
