import { useEffect, useState } from "react"
import "./style.css"
import Card from './components/Card'
import Filter from "./components/Filter"

function App() {

  const [pokemons, setPokemons] = useState([{}])
  const [loading, setLoading] = useState(true)
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

  const getPokemons = async () => {
    const pokemonsFromApi = []
    for (let id = 1; id <= 20; id++) {
      try {
        const response = await fetch(BASE_URL + id)
        const pokemonAsJson = await response.json()
        const newPokemon = {
          id: pokemonAsJson.id,
          name: pokemonAsJson.name,
          image: pokemonAsJson.sprites.other["official-artwork"].front_shiny,
          types: pokemonAsJson.types,
        }
        pokemonsFromApi.push(newPokemon)
      } catch (error) {
        console.log(error)
      }
    }
    setPokemons(pokemonsFromApi)
    setLoading(false)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <section>
      <Filter itemsToFilter={pokemons} setItemsToFilter={setPokemons} />
      {!loading ? pokemons.map((pokemon, index) =>
        <Card key={index} pokemon={pokemon} />
      ) : console.log("loading")}
    </section>
  )
}

export default App
