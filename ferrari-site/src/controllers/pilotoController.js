var pilotoModel = require("../models/pilotoModel");

function buscarPorNome(req, res) {
  var nome = req.query.nome;

  pilotoModel.buscarPorNome(nome).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  pilotoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  pilotoModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  buscarPorNome,
  buscarPorId,
  listar
};
