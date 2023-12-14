import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import { BottomOverlay, TopOverlay } from "./Overlay";
import { getPokemon } from "../api/pokemonApi";

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  const getPokemons = async () => {
    const pokemonsFromApi = [];
    for (let id = 1; id <= 30; id++) {
      // get first 30 pokemons
      const newPokemon = await getPokemon(id);
      pokemonsFromApi.push(newPokemon);
    }
    setPokemons(pokemonsFromApi);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <TopOverlay />
      <main>
        <section className="filter-container">
          <Filter
            itemsToFilter={pokemons}
            setFilteredItems={setFiltered}
            value={query}
            setValue={setQuery}
          />
        </section>
        <section className="pokemon-list">
          {loading ? (
            <p>Loading pokemon.</p>
          ) : !query ? (
            pokemons.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))
          ) : filtered.length === 0 ? (
            <p>No results found.</p>
          ) : (
            filtered.map((pokemon, index) => (
              <Card key={index} pokemon={pokemon} />
            ))
          )}
        </section>
      </main>
      <BottomOverlay />
    </>
  );
}

export default Home;
