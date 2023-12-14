import { useEffect, useState } from "react"
import Card from '../Card/Card'
import Filter from "../Filter/Filter"
import { BottomOverlay, TopOverlay } from "../Overlay/Overlay"
import { getPokemon } from "../../api/pokemon"

function Home() {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtered, setFiltered] = useState([])
  const [value, setValue] = useState("")

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
        <section className="filter-container">
          <Filter
            itemsToFilter={pokemons}
            setFilteredItems={setFiltered}
            value={value}
            setValue={setValue} />
        </section>
        <section className="pokemon-list">
          {(!loading && filtered.length === 0 && !value) ?
            pokemons.map((pokemon, index) =>
              <Card key={index} pokemon={pokemon} />
            ) :
            (!loading && filtered.length > 0) ? filtered.map((pokemon, index) =>
              <Card key={index} pokemon={pokemon} />
            ) :
              (!loading && filtered.length === 0 && value) ?
                <p>No results found.</p> :
                console.log("loading")}
        </section>
      </main>
      <BottomOverlay />
    </>
  )
}

export default Home
