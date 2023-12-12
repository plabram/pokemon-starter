const { Pokemon } = require("../models/mongo");

const getAllPokemonFromDb = async (filter) => {
  try {
    const nameFilterOptions = {
      name: { $regex: new RegExp(filter, "i") },
    };
    const Pokemons = await Pokemon.find(filter ? nameFilterOptions : {});
    return Pokemons;
  } catch (error) {
    console.log("Error:", error);
  }
};

const getPokemonByIdFromDb = async (id) => {
  try {
    const pokemon = await Pokemon.findById(id);
    return pokemon;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPokemonFromDb,
  getPokemonByIdFromDb,
};
