const QueryBuilder = require('../utils/QueryBuilder');
const client = require('../config/postgres');

const Create = async (values) => {
  if (typeof values !== "object") {
    throw new Error('Por favor, insira os values através de um array.')
  }
  const queryText = QueryBuilder.createQuery('perguntas_table', 'titulo', 'descricao')
  const data = await client.query(queryText, values)
  return data;
}

const FindAll = async (table_name) => {
  const queryText = QueryBuilder.queryGet(table_name);
  const data = await client.query(queryText)
  return data;
}

const index = async (table_name, id) => {
  const queryText = QueryBuilder.queryGetOne(table_name, id)
  const data = await client.query(queryText);
  return data;
}

module.exports = {
  Create,
  FindAll,
  index,
};