import React from 'react'
import { useState } from 'react'
import PokemonItem from './pokemonItem';

const Page = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 10;
  const totalPokemonPages = Math.ceil(props.pokemons.length / pokemonsPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'previous' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    else if (direction === 'next' && currentPage != totalPokemonPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * pokemonsPerPage;

  const displayPokemons = props.pokemons.slice(startIndex, startIndex + pokemonsPerPage)

  return (
    <div>
      <div style={userStyle}>
        {displayPokemons.map(user => (
          <PokemonItem key={user.num} user={user} />
        ))}
      </div>
      <div id='pagination'>
        <button id='previous' className='btn btn-dark' onClick={() => handlePageChange('previous')}>Previous</button>
        <span className='btn btn-dark'>Page {currentPage} of {totalPokemonPages}</span>
        <button className='btn btn-dark' id='next' onClick={() => handlePageChange('next')}>Next</button>
      </div>
    </div>
  )
}
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem'
}

export default Page
