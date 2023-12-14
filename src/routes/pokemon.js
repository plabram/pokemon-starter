const { getAllPokemon, getPokemonById } = require("../controllers/pokemon");
const express = require("express");

const router = express.Router();

router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);

module.exports = router;
