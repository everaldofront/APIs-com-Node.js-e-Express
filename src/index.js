const express = require('express');

const api = express();

api.get('/', function (req, res) {
  console.log('nova requisição');
  res.send('Hello World from API');
});

api.get('/sobre', function (req, res) {
  console.log('nova requisição');
  res.send('Minha página sobre');
});

api.get('/:cargo/:nome', function (req, res) {
  res.send(req.params); // Passando um parâmetro
});

api.post('/post', function (req, res) {
  res.send('Recebeu uma solicitação de POST');
});

api.put('/put', function (req, res) {
  res.send('Recebeu uma solicitação de PUT');
});

api.delete('/delete', function (req, res) {
  res.send('Recebeu uma solicitação de DELETE');
});

api.listen(3000, function () {
  console.log('API rodando na porta 3000.');
});