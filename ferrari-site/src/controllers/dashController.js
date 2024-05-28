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
  
  dashModel.pontuacaoMedia(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function acertosPorTentativa(req, res) {
  var idUsuario = req.body.idServer;
  
  dashModel.acertosPorTentativa(idUsuario).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function topUsuarios(req, res) {
  var limiteUsuarios = req.body.limiteServer;
  
  dashModel.topUsuarios(limiteUsuarios).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function pilotosFavoritos(req, res) {
  
  dashModel.pilotosFavoritos().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    maiorPontuacao,
    menorPontuacao,
    pontuacaoMedia,
    acertosPorTentativa,
    topUsuarios,
    pilotosFavoritos
};
