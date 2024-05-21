var database = require("../database/config")

function pegarIdTentativa(idUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");
    
    var instrucaoSql = `
    SELECT MAX(idTentativa) as idTentativa FROM tentativaQuiz WHERE fkUsuario = ${idUsuario}
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tentativa(idTentativa, idUsuario, fkQuiz, qtdCorretas) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.");
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativaQuiz (idTentativa, fkUsuario, fkQuiz, qtdAcertos) VALUES ('${idTentativa}', '${idUsuario}', '${fkQuiz}', '${qtdCorretas}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    pegarIdTentativa,
    tentativa
};