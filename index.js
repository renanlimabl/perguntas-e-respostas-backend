const express = require('express');
const client = require('./config/postgres');

const app = express();

app.use(express.json())

const PerguntasController = require('./controllers/PerguntasController');

app.get('/', async (request, response) => {
  const queryText = 'SELECT * FROM perguntas_table';

  try {
    const data = await client.query(queryText)
    return response.status(200).json({ response: data.rows })
  } catch (e) {
    console.log(e)
  }


});

app.post('/save', async (request, response) => {
  // const queryText = 'INSERT INTO perguntas_table(titulo, descricao) VALUES($1, $2) RETURNING *';
  const queryText = PerguntasController.create('perguntas_table', 'titulo', 'descricao')
  const values = ['Agora foi!!', 'Postgres e Nodejs é massa :D'];
  try {
    const data = await client.query(queryText, values)
    console.log(data.rows)
    return response.status(200).json({ response: data.rows })
  } catch (e) {
    console.log(e.stack)
  }
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})