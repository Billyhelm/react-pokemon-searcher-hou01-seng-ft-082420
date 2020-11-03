import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  //state goes here
  state = {
    pokemonList: [],
    searchTerm: ""
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/pokemon").then(res=>res.json())
    .then(data=>this.setState({pokemonList: data}))
  }
  //functions go here
  handleSearch = (e) => {
    console.log(e.target.value)
    this.setState({searchTerm: e.target.value})
  }

  filteredPokemon = () => {
    if(this.state.searchTerm == ""){return this.state.pokemonList}
    else {
    return this.state.pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }}

  addPokemon = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const hp = e.target.hp.value
    const front = e.target.frontUrl.value
    const back = e.target.backUrl.value

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back}
      })
    }).then(res=>res.json()).then((newPokemon) => {
      this.setState({pokemonList: [...this.state.pokemonList, newPokemon]})
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submit={this.addPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemonList={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
