import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSearch.css'

const InputSearch = () => {

    const navigate = useNavigate()
    const Submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)

    }

  return (
    <form className='form__search' onSubmit={Submit}>
        <input className='input__search' id='search' type="text" placeholder='Search a pokemon' />
        <button className='btn__search'>Search</button>
    </form>
  )
}

export default InputSearch