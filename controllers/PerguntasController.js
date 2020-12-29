const client = require('../config/postgres');

const PerguntasController = {
  // utils
  createQuery: (table_name, ...columns) => {
    // columns
    const textValues = [...columns].join(',');

    // create numbers of values for the query ex: $1, $2...
    let numbersOfValues = [];
    for (let i = 1; i <= [...columns].length; i++) {
      numbersOfValues.push(`$${i}`)
    }
    numbersOfValues.join(',')


    return `INSERT INTO ${table_name}(${textValues}) VALUES(${numbersOfValues}) RETURNING *`
  },
  create: async (request, response) => {
    // const queryText = 'INSERT INTO perguntas_table(titulo, descricao) VALUES($1, $2) RETURNING *';
    const queryText = PerguntasController.createQuery('perguntas_table', 'titulo', 'descricao')

    const values = ['Agora foi!!', 'Postgres e Nodejs é massa :D'];
    try {
      const data = await client.query(queryText, values)
      console.log(data.rows)
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e.stack)
    }
  },
  // utils
  queryGet: (table_name) => {
    return `SELECT * FROM ${table_name}`
  },
  all: async (request, response) => {
    const queryText = PerguntasController.queryGet('perguntas_table');
    try {
      const data = await client.query(queryText)
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
    }
  },
}

module.exports = PerguntasController;