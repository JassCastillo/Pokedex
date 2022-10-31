import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
   <header className='header'>
        <div className='header__red'>
            <div className='header__black'>
            <img className='img' src="/img/home/pokedex.png" alt="" />
            </div>
            <div className='header__circle'>
            <div className='header__circle-int'></div>
            </div>
        </div>
   </header>
    )
}

export default Header