var quizModel = require("../models/quizModel");

function tentativa(req, res) {
    var idUsuario = req.body.idServer;
    var idQuiz = req.body.quizServer;
    var qtdCorretas = req.body.corretasServer;

    quizModel.pegarIdTentativa(idUsuario)
        .then(
            function (resultado) {
            // o resultado retorna essa lista: [ { idTentativa: 3 } ]
            // por isso eu acesso o valor que quero com 'resultado[0].idTentativa'
            // e caso retorne undefined eu seto como 1 ou caso encontre algum valor eu adiciono mais 1 a esse valor encontrado
            var idTentativa = resultado[0].idTentativa == undefined ? 1 : resultado[0].idTentativa + 1;
            return quizModel.tentativa(idTentativa, idUsuario, idQuiz, qtdCorretas);
        })
        .then(
            function (resultado) {
            res.status(203).json(resultado);
        })
        .catch(
            function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o insert da tentativa! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    tentativa: tentativa
};
