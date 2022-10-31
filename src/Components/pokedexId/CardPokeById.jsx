import axios from 'axios'
import React, { useEffect, useState } from 'react'


const CardPokeById = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
           .then(res => setPokemon(res.data))
           .catch(err => console.log(err))
    }, [])
    console.log(url)
  return (
    <article>
        <header className={`card-poke__header bg-${pokemon?.types[0].type.name}`}>
            <img className='card-poke__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
    </article>
  )
}

export default CardPokeById