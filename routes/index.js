const { Router } = require('express');
const perguntasRoutes = require('./perguntas.routes');
const respostaRoutes = require('./respostas.routes');

const routes = Router();

routes.use('/perguntas', perguntasRoutes)
routes.use('/resposta', respostaRoutes)

module.exports = routes;