const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const SPECIES_URL = "https://pokeapi.co/api/v2/pokemon-species/";

export const getPokemon = async (id) => {
  try {
    const response = await fetch(BASE_URL + id);
    const pokemonAsJson = await response.json();
    const newPokemon = {
      id: pokemonAsJson.id,
      name: pokemonAsJson.name,
      image: pokemonAsJson.sprites.other["official-artwork"].front_shiny,
      types: pokemonAsJson.types,
    };
    console.log("Pokemon retrieved from API");
    return newPokemon;
  } catch (error) {
    console.log(error);
  }
};

const getEvolutionChain = async (url) => {
  try {
    const evolutionData = await fetch(url);
    const evolutionDataToJson = await evolutionData.json();
    return evolutionDataToJson;
  } catch (error) {
    console.log(error);
  }
};

export const getAscendant = async (name) => {
  try {
    const speciesData = await fetch(SPECIES_URL + name);
    const speciesDataAsJson = await speciesData.json();
    const evolutionChainUrl = speciesDataAsJson.evolution_chain.url;
    const evolutionData = await getEvolutionChain(evolutionChainUrl);

    if (name === evolutionData.chain.species.name) {
      // Pokemon is the first in the chain
      return null;
    } else if (name === evolutionData.chain.evolves_to[0].species.name) {
      // Pokemon is the second in the chain
      const ascendant = evolutionData.chain.species.name;
      return ascendant;
    } else if (
      name === evolutionData.chain.evolves_to[0].evolves_to[0].species.name
    ) {
      // Pokemon is the third in the chain
      const ascendant = evolutionData.chain.evolves_to[0].species.name;
      return ascendant;
    } else {
      // No ascendant found
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
