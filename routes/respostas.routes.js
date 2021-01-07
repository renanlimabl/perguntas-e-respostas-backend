const { Router } = require('express');
const RespostasController = require('../controllers/RespostasController');

const respostasRouter = Router();

respostasRouter.post('/:id', RespostasController.create);

module.exports = respostasRouter;