import React from 'react'
import { Link } from 'react-router-dom'

export const Pokemon404 = () => {
  return (
    <>  
    <h1>Pokemon not Found </h1>
    <Link to='/pokedex'>Go back to Pokedex</Link>
    </>
  )
}
