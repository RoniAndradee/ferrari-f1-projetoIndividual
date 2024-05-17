var quizModel = require("../models/quizModel");

function tentativa(req, res) {
    let qtdCorretas = req.body.corretasServer;
    let idUsuario = req.body.idServer;

        quizModel.tentativa(qtdCorretas, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    tentativa
}