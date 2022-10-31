import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pokemon404 } from '../Components/pokedexId/Pokemon404';
import Header from '../Components/shared/Header';
import './styles/pokedexId.css'

const PokedexById = () => {

  const { id } = useParams()

  const [pokemon, setPokemon] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err);
        setHasError(true)
      })
  }, [])


  if (hasError) {
    return <Pokemon404 />
  }
  console.log(pokemon)
  return (
    <article>
      <Header />
      <section className='pokemon-container'>
        <header className={`poke__header bg-${pokemon?.types[0].type.name}`}>
          <img className='poke-sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <h1 className={`poke-id letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
        <h2 className={`poke-name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        <section className='poke-measures'>
          <span className='poke-height'>Height</span>
          <span className='poke-weight'>Weight</span>
          <span className='poke-height-num'>{pokemon?.height}</span>
          <span className='poke-weight-num'>{pokemon?.weight}</span>
        </section>
        <section className='poke-container'>
          <section className='poke-abilities'>
            <h3>Skills</h3>
            <ul className='abilities-container'>
              {pokemon?.abilities.map((ability, index) => (
                <li key={index} className='poke-abilities-label'>{ability.ability.name}</li>
              ))}
            </ul>
          </section>
          <section className='poke-types'>
            <h3>Types</h3>
            <ul className='types-container'>
              {pokemon?.types.map((type, index) => (
                <li key={index} className='poke-types-label'>{type.type.name}</li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </article>

  )
}

export default PokedexById