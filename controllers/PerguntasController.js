const client = require('../config/postgres');
const QueryBuilder = require('../utils/QueryBuilder');
const PerguntasModel = require('../models/PerguntasModel');


const PerguntasController = {
  create: async (request, response) => {
    const values = ['O que significa MVC?', 'Estou com uma dúvida, qual significado das siglas MVC?'];
    try {
      const data = await PerguntasModel.Create(values);
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e.stack)
    }
  },
  all: async (request, response) => {
    try {
      const data = await PerguntasModel.FindAll();
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
    }
  },
}

module.exports = PerguntasController;