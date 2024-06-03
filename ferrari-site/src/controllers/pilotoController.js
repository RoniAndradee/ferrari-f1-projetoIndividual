var pilotoModel = require("../models/pilotoModel");

function listar(req, res) {
  pilotoModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
  listar
};
