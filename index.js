const express = require('express');
const routes = require('./routes')

const app = express();

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid project ID.' });
  }

  return next();
}

app.use(express.json())
app.use(routes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`)
})