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

function acertosPorTentativa(idUsuario) {
    var instrucaoSql = `SELECT idTentativa, qtdAcertos AS acertos FROM tentativaQuiz WHERE fkUsuario = '${idUsuario}'`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function topUsuarios(limiteUsuarios) {
    var instrucaoSql = `SELECT qtdAcertos AS acertos, nome FROM tentativaQuiz JOIN usuario ON fkUsuario = idUsuario ORDER BY qtdAcertos DESC LIMIT ${limiteUsuarios}`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pilotosFavoritos() {
    var instrucaoSql = `SELECT piloto.nome, COUNT(usuario.fkPilotoFavorito) AS 'qtdVezesEscolhido' FROM usuario JOIN piloto ON idPiloto = fkPilotoFavorito GROUP BY piloto.nome`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    maiorPontuacao,
    menorPontuacao,
    pontuacaoMedia,
    acertosPorTentativa,
    topUsuarios,
    pilotosFavoritos
};
