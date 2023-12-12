import React from 'react'

const Card = ({ pokemon }) => {
  const { id, img, name, parent, types } = pokemon

  return (
    <div>
      <div>
        <p>Id / {id}</p>
        <img src={img} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        {types.map((type, index) => <p key={index}>{type}</p>)}
        {parent ? <p>Evoluciona de {parent}</p> : null}
      </div>
    </div>
  )
}

export default Card