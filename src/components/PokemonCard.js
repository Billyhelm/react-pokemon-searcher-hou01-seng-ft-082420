import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  handleClick = () => {
    this.setState({flipped: (!this.state.flipped)})
  }

  render() {
    //console.log(this.props.pokemon)
    const pokemon = this.props.pokemon
    return (
      <Card>
        <div onClick={()=>this.handleClick()}>
          <div className="image" >
            <img src={this.state.flipped ? pokemon.sprites.back : pokemon.sprites.front} alt="oh no!"/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard