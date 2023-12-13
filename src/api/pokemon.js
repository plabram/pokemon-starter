const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

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
