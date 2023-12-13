import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Detail = () => {
  const { name } = useParams()
  console.log(name)
  return (
    <div>
      <div>{name}</div>
      <Link to={"/"}>Back to Home 🏡</Link>
    </div>
  )
}

export default Detail