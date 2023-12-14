const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  parent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }],
  types: [{ type: String, required: true }],
  friendlyId: { type: Number, required: true }, // Manually assigned user-friendly ID (for example, "1", "2", "35")
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = {
  Pokemon,
};
