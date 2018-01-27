// Importando os módulos/dependências/bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const expressMongoDb = require('express-mongo-db');

// Importando os controllers
const usuariosController = require('./controllers/usuarios.js');
const servicosController = require('./controllers/servicos.js');

// Instanciando o express
const app = express();

// Aplicando o body parser
app.use(bodyParser.json());

// Conecta a nossa api ao banco de dados
app.use(expressMongoDb('mongodb://localhost/escambo'));

// Inicializando o servidor
app.listen(3000, () => {
    console.log('Servidor ligado. Acesse em http://45.55.82.101:3000');
});

// Endpoints / Rotas

//Usuarios
app.get('/api/usuarios', usuariosController.listar);
app.get('/api/usuarios/:id', usuariosController.listaUm);
app.post('/api/usuarios/criar', usuariosController.criar);
app.put('/api/usuarios/atualizar/:id', usuariosController.atualizar);
app.delete('/api/usuarios/deletar/:id', usuariosController.deletar);

//Servicos
app.get('/api/servicos', servicosController.listar);
app.get('/api/servicos/:id', servicosController.listaUm);
app.post('/api/servicos/criar', servicosController.criar);
app.put('/api/servicos/atualizar/:id', servicosController.atualizar);
app.delete('/api/servicos/deletar/:id', servicosController.deletar);
