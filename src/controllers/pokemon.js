const {
  getAllPokemonFromDb,
  getPokemonByIdFromDb,
} = require("../repositories/pokemon");

const getAllPokemon = async (req, res, next) => {
  try {
    const { filter } = req.query;
    const Pokemons = await getAllPokemonFromDb(filter);
    res.status(200).json({ data: Pokemons });
  } catch {
    return next(setError(400, "Can't find Pokemons"));
  }
};

const getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Pokemon = await getPokemonByIdFromDb(id);
    res.status(200).json({ data: Pokemon });
  } catch {
    return next(setError(400, "Can't find Pokemon"));
  }
};

module.exports = {
  getAllPokemon,
  getPokemonById,
};
