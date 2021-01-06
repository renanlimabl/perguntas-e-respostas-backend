const { Router } = require('express');
const perguntasRoutes = require('./perguntas.routes');

const routes = Router();

routes.use('/perguntas', perguntasRoutes)

module.exports = routes;