const client = require('../config/postgres');
const QueryBuilder = require('../utils/QueryBuilder');
const PerguntasModel = require('../models/PerguntasModel');


const PerguntasController = {
  create: async (request, response) => {
    const { pergunta, resposta } = request.body;
    const values = [pergunta, resposta];
    try {
      const data = await PerguntasModel.Create(values);
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
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