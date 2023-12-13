import { useEffect, useState } from "react"
import Card from './Card'
import Filter from "./Filter"
import { BottomOverlay, TopOverlay } from "./Overlay"
import { getPokemon } from "../api/pokemon"

function Home() {

  const [pokemons, setPokemons] = useState([{}])
  const [loading, setLoading] = useState(true)

  const getPokemons = async () => {
    const pokemonsFromApi = []
    for (let id = 1; id <= 25; id++) {
      const newPokemon = await getPokemon(id)
      pokemonsFromApi.push(newPokemon);
    }
    setPokemons(pokemonsFromApi)
    setLoading(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <>
      <TopOverlay />
      <main>
        <section className="filter">
          <Filter itemsToFilter={pokemons} setItemsToFilter={setPokemons} />
        </section>
        <section className="pokemon-list">
          {!loading ? pokemons.map((pokemon, index) =>
            <Card key={index} pokemon={pokemon} />
          ) : console.log("loading")}
        </section>
      </main>
      <BottomOverlay />
    </>
  )
}

export default Home
