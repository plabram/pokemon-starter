import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ pokemon }) => {

  const { id, image, name,
    //  parent, 
    types } = pokemon

  const capitaliseFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <Link to={`/${name}`} className='card-container'>
      <div>
        <span className="id">ID / {id}</span>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>{capitaliseFirstLetter(name)}</h1>
        {types.map((type) => <span className="type" key={type.slot}>{type.type.name.toUpperCase()}</span>)}
        {/* {parent ? <p>Evoluciona de {parent}</p> : null} */}
      </div>
    </Link>
  )
}

export default Card