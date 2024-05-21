var database = require("../database/config");

function maiorPontuacao(idUsuario) {
    var instrucaoSql = `SELECT MAX(qtdAcertos) AS 'maiorPontuacao' FROM tentativaQuiz WHERE fkUsuario = '${idUsuario}'`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function menorPontuacao(idUsuario) {
    var instrucaoSql = `SELECT MIN(qtdAcertos) AS 'menorPontuacao' FROM tentativaQuiz WHERE fkUsuario = '${idUsuario}'`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pontuacaoMedia(idUsuario) {
    var instrucaoSql = `SELECT TRUNCATE(AVG(qtdAcertos),2) AS 'pontuacaoMedia'FROM tentativaQuiz WHERE fkUsuario = '${idUsuario}'`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    maiorPontuacao,
    menorPontuacao,
    pontuacaoMedia
};
