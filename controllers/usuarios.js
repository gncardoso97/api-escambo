const ObjectID = require('mongodb').ObjectID;

// Função para listar todos os meus usuários que estão no banco de dados na coleção 'usuários'
exports.listar = (req, res) => {
    req.db.collection('usuarios').find().toArray((err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
}

// Função para lista um usuário que esteja no banco de dados na coleção 'usuários'
exports.listaUm = (req, res) => {
    req.db.collection('usuarios').findOne({"_id" : req.params.id }, function(err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
}

// Função para testar o POST na minha rota '/api/usuarios/criar'
exports.criar = (req, res) => {
    req.db.collection('usuarios').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').update({"_id": id}, req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;

    req.db.collection('usuarios').remove({"_id": id}, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(200);
        }
    });
}

