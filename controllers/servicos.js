const ObjectID = require('mongodb').ObjectID;

// Função para listar todos os servicos que estão no banco de dados na coleção 'servicos'
exports.listar = (req, res) => {
    req.db.collection('servicos').aggregate([
        {
            $lookup:
            {
                from: 'usuarios',
                localField: 'id_prestador',
                foreignField: '_id',
                as: 'prestador'
            },            
        }
     ]).toArray((err, result) => {
        if(err){
            res.send(err);
            req.db.close();
        }
        else{
            res.send(result);
            req.db.close();
        }
    });
}

// Função para lista um servico que esteja no banco de dados na coleção 'servicos'
exports.listaUm = (req, res) => {
    req.db.collection('servicos').findOne({"_id" : req.params.id}).then(function(result) {
        if(!result){
            res.send(err);
            req.db.close();
        }
        else{
            res.send(result);
            req.db.close();
        }
    });
}

// Função para testar o POST na minha rota '/api/servicos/servico'
exports.criar = (req, res) => {
    req.db.collection('servicos').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
            req.db.close();
        }
        else{
            res.sendStatus(201);
            req.db.close();
        }
    });
}

exports.atualizar = (req, res) => {
    let id = req.params.id;

    req.db.collection('servicos').update({"_id": id}, req.body, (err, result) => {
        if(err){
            res.send(err);
            req.db.close();
        }
        else{
            res.sendStatus(200);
            req.db.close();
        }
    });
}

exports.deletar = (req, res) => {
    let id = req.params.id;

    req.db.collection('servicos').remove({"_id": id}, (err, result) => {
        if(err){
            res.send(err);
            req.db.close();
        }
        else{
            res.sendStatus(200);
            req.db.close();
        }
    });
}