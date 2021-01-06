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
    console.log('all')
    try {
      const data = await PerguntasModel.FindAll('perguntas_table');
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
    }
  },
  index: async (request, response) => {
    const { id } = request.params
    try {
      const data = await PerguntasModel.index('perguntas_table', id);
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = PerguntasController;