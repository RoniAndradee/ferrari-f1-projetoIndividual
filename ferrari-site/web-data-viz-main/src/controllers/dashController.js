var dashModel = require("../models/dashModel");

function maiorPontuacao(req, res) {
  var idUsuario = req.body.idServer;

  dashModel.maiorPontuacao(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function menorPontuacao(req, res) {
    var idUsuario = req.body.idServer;

  dashModel.menorPontuacao(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function pontuacaoMedia(req, res) {
    var idUsuario = req.body.idServer;

  console.log('ESTOU CONTROLLER O ID AQUI É: ' + idUsuario)


  dashModel.pontuacaoMedia(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    maiorPontuacao,
    menorPontuacao,
    pontuacaoMedia
};
