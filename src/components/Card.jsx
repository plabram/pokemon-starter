import React from 'react'

const Card = ({ pokemon }) => {

  const { id, image, name,
    //  parent, 
    types } = pokemon

  const capitaliseFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    <div className='card-container'>
      <div>
        <span className="id">ID / {id}</span>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>{capitaliseFirstLetter(name)}</h1>
        {types.map((type) => <span className="type" key={type.slot}>{type.type.name.toUpperCase()}</span>)}
        {/* {parent ? <p>Evoluciona de {parent}</p> : null} */}
      </div>
    </div>
  )
}

export default Card