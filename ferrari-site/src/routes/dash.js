var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.post("/maiorPontuacao", function (req, res) {
    dashController.maiorPontuacao(req, res);
})

router.post("/menorPontuacao", function (req, res) {
    dashController.menorPontuacao(req, res);
})

router.post("/pontuacaoMedia", function (req, res) {
    dashController.pontuacaoMedia(req, res);
})

router.post("/acertosPorTentativa", function (req, res) {
    dashController.acertosPorTentativa(req, res);
})

router.post("/topUsuarios", function (req, res) {
    dashController.topUsuarios(req, res);
})

router.post("/pilotosFavoritos", function (req, res) {
    dashController.pilotosFavoritos(req, res);
})

module.exports = router;