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

// function cadastrar(req, res) {
//   var cnpj = req.body.cnpj;
//   var razaoSocial = req.body.razaoSocial;

//   pilotoModel.buscarPorCnpj(cnpj).then((resultado) => {
//     if (resultado.length > 0) {
//       res
//         .status(401)
//         .json({ mensagem: `a emp... com o cnpj ${cnpj} já existe` });
//     } else {
//       pilotoModel.cadastrar(razaoSocial, cnpj).then((resultado) => {
//         res.status(201).json(resultado);
//       });
//     }
//   });
// }

module.exports = {
  buscarPorNome,
  buscarPorId,
  // cadastrar,
  listar,
};
