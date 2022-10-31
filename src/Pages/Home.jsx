import React from 'react'
import FormHome from '../Components/home/FormHome'
import Footer from '../Components/shared/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/img/home/pokedex.png" alt="" />
      <header className='poke__head'>
      <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
      <p className='pokedex__text'>Give me your to see the pokedex</p>
      </header>
      <FormHome />
      <Footer />
    </article>
    
  )
}

export default Home