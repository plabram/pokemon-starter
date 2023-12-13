import React from 'react'

const Card = ({ pokemon }) => {

  const { id, image, name,
    //  parent, 
    types } = pokemon

  console.log(image)

  return (
    <div>
      <div>
        <p>Id / {id}</p>
        <img src={image} alt={name} />
      </div>
      <div>
        <h1>{name}</h1>
        {types.map((type) => <p key={type.slot}>{type.type.name}</p>)}
        {/* {parent ? <p>Evoluciona de {parent}</p> : null} */}
      </div>
    </div>
  )
}

export default Card