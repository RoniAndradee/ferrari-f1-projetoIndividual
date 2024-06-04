var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT * FROM piloto`;

  return database.executar(instrucaoSql);
}

module.exports = {
  listar
};
