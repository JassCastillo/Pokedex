import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../Components/pokedex/CardPoke'
import InputSearch from '../Components/pokedex/InputSearch'
import SelectByType from '../Components/pokedex/SelectByType'
import Header from '../Components/shared/Header'
import './styles/pokedex.css'

const Pokedex = () => {



    const [pokemons, setPokemons] = useState([])
    const [typeSelected, setTypeSelected] = useState('All Pokemons')

    useEffect(() => {
      if(typeSelected !== 'All Pokemons'){
        //Si se selecciono un tipo de pokemon
        axios.get(typeSelected)
        .then(res => {
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)})
        .catch(err => console.log(err))
      }else{
        //Si quiero todos los pokemons
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=21&offset=0'
        axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
      }
    }, [typeSelected])

  const userName = useSelector(state => state.userName)

  return (
    <div className='pokedex__content'>
       <Header />
      <header className='pokedex__header'>
      <p className='label'><span className='span__name'>Welcome {userName}</span>, here you can find your favorite pokemon</p>
      
      <aside>
        <InputSearch />
        <SelectByType setTypeSelected = {setTypeSelected} />
      </aside>
      </header>
      <main>
        <div className='card-container'>
          {
          pokemons?.map(pokemon => (
            <CardPoke 
            key={pokemon.url}
            url = {pokemon.url}
            />
          ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex