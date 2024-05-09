var database = require("../database/config");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM piloto WHERE id = '${id}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM piloto`;

  return database.executar(instrucaoSql);
}

function buscarPorNome(nome) {
  var instrucaoSql = `SELECT * FROM piloto WHERE nome = '${nome}'`;

  return database.executar(instrucaoSql);
}

// function cadastrar(razaoSocial, cnpj) {
//   var instrucaoSql = `INSERT INTO emp... (razao_social, cnpj) VALUES ('${razaoSocial}', '${cnpj}')`;

//   return database.executar(instrucaoSql);
// }

module.exports = { buscarPorId, listar, buscarPorNome };
