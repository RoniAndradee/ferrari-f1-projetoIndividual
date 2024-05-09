var express = require("express");
var router = express.Router();

var pilotoController = require("../controllers/pilotoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrar", function (req, res) {
//     pilotoController.cadastrar(req, res);
// })

router.get("/buscar", function (req, res) {
    pilotoController.buscarPorNome(req, res);
});

router.get("/buscar/:id", function (req, res) {
  pilotoController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  pilotoController.listar(req, res);
});

module.exports = router;