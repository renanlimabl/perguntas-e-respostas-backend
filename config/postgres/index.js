const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'perguntas',
  user: 'root',
  password: '123456',
})

client
  .connect()
  .then(console.log('connected'))
  .catch(err => console.log(err))

module.exports = client;