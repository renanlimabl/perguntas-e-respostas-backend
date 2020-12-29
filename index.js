const express = require('express');
const app = express();

app.use(express.json())

const PerguntasController = require('./controllers/PerguntasController');

app.get('/', PerguntasController.all);

app.post('/save', PerguntasController.create);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})