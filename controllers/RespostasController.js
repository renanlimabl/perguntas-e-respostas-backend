const RespostasModel = require('../models/RespostasModel');

const PerguntasController = {
  create: async (request, response) => {
    const { resposta } = request.body;
    const { id } = request.params;
    const values = [resposta, id];
    try {
      const data = await RespostasModel.Create(values);
      return response.status(200).json({ response: data.rows })
    } catch (e) {
      console.log(e)
    }
  },
}

module.exports = PerguntasController;