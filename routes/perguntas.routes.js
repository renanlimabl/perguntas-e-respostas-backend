const { Router } = require('express');
const PerguntasController = require('../controllers/PerguntasController');

const perguntasRoutes = Router();

perguntasRoutes.get('/:id', PerguntasController.index)

perguntasRoutes.get('/', PerguntasController.all)

perguntasRoutes.post('/save', PerguntasController.create);

perguntasRoutes.post('/responder', PerguntasController.create);

module.exports = perguntasRoutes;
