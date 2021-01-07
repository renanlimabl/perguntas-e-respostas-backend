const QueryBuilder = require('../utils/QueryBuilder');
const client = require('../config/postgres');

const Create = async (values) => {
  if (typeof values !== "object") {
    throw new Error('Por favor, insira os values através de um array.')
  }
  const queryText = QueryBuilder.createQuery('resposta_table', 'resposta', 'id_pergunta')
  const data = await client.query(queryText, values)
  return data;
}

module.exports = {
  Create,
};