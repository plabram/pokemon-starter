import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPokemon } from '../api/pokemon'
import Card from './Card'

const Detail = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  const getAndSetPokemon = async (name) => {
    const selectedPokemon = await getPokemon(name)
    setPokemon(selectedPokemon)
    setLoading(false)
  }

  useEffect(() => {
    getAndSetPokemon(name)
  }, [])

  return (
    <div className="pokemon-detail">
      {!loading ? <Card pokemon={pokemon} /> : null}
      <div className="home-back">
        <Link to={"/"} >Back to Home 🏡</Link>
      </div>
    </div>
  )
}

export default Detail