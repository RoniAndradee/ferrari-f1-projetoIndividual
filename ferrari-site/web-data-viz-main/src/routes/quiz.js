var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/tentativa", function (req, res) {
    quizController.tentativa(req, res);
})

router.get("/pegarIdTentativa", function (req, res) {
    quizController.pegarIdTentativa(req, res);
})

module.exports = router;