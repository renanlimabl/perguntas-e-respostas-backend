const express = require('express');
const client = require('./config/postgres')

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
  return res.status(200).json({ message: 'Servidor rodando' })
});

app.post('/save', async (request, response) => {
  const newQuery = 'INSERT INTO perguntas_table(titulo, descricao) VALUES($1, $2) RETURNING *';
  const values = ['Agora foi!!', 'Postgres e Nodejs é massa :D'];
  try {
    const data = await client.query(newQuery, values)
    console.log(data.rows)
    return response.status(200).json({ message: data.rows })
  } catch (e) {
    console.log(e.stack)
  }
});

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})