import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const pokemons = this.props.pokemonList
    //console.log(pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemons.map(pokemon=>{
        return (<PokemonCard pokemon={pokemon} />)
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
