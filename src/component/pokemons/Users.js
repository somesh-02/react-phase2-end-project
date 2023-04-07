import React, { Component } from 'react'
import PokemonItem from './pokemonItem'

class Users extends Component {
render(){
    const userStyle={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'
    }
  return (
    <div style={userStyle}>
    {this.props.pokemons.map(user=>(
        <PokemonItem key={user.num} user={user}/>
    ))}
  </div>
  );
}
}
export default Users
