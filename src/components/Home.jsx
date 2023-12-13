import { useEffect, useState } from "react"
import Card from './Card'
import Filter from "./Filter"
import { BottomOverlay, TopOverlay } from "./Overlay"
import { getPokemon } from "../api/pokemon"

function Home() {

  const [pokemons, setPokemons] = useState([{}])
  const [loading, setLoading] = useState(true)
  const [filtered, setFiltered] = useState([{}])

  const getPokemons = async () => {
    const pokemonsFromApi = []
    for (let id = 1; id <= 30; id++) {
      const newPokemon = await getPokemon(id)
      pokemonsFromApi.push(newPokemon)
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
          <Filter itemsToFilter={pokemons} setFilteredItems={setFiltered} />
        </section>
        <section className="pokemon-list">
          {(!loading && Object.keys(filtered[0]).length === 0) ? pokemons.map((pokemon, index) =>
            <Card key={index} pokemon={pokemon} />
          ) :
            (!loading && Object.keys(filtered[0]).length > 0) ? filtered.map((pokemon, index) =>
              <Card key={index} pokemon={pokemon} />
            ) :
              console.log("loading")}
        </section>
      </main>
      <BottomOverlay />
    </>
  )
}

export default Home
