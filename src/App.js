import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.changeList = this.changeList.bind(this);
    this.changeListtoOriginal = this.changeListtoOriginal.bind(this);
    
    this.state = {
        cliqueProximoPokemon: 0,
        pokemonList: pokemons,
        filter: 'All'
    }
  }
     
  handleClick() {
    this.setState((estadoAnterior, _props) => {
      if (this.state.cliqueProximoPokemon < this.state.pokemonList.length - 1) {
        console.log(this)
        return {
          cliqueProximoPokemon: estadoAnterior.cliqueProximoPokemon + 1
        }
      } else {
        return {
          cliqueProximoPokemon: 0
        }
      }
      
    })
  }

  changeList(target) {
    return this.setState({
      filter: target.innerHTML,
      pokemonList: pokemons.filter(pokemon => pokemon.type === target.innerHTML),
      cliqueProximoPokemon: 0
    })
  }

  changeListtoOriginal () {
    return this.setState({
      pokemonList: pokemons,
      cliqueProximoPokemon: 0
    })
  }

render()
  {  return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemonList[this.state.cliqueProximoPokemon]} />
        <button onClick={this.handleClick}>Próximo pokémon</button>
        <button onClick={this.changeListtoOriginal}>All</button>

        {pokemons.map(element => <button key={element.id} onClick={(event) => this.changeList(event.target)}>{element.type}</button>
        )}

        {/* <button onClick={(event) => this.changeList(event.target)}>Fire</button>
        <button onClick={(event) => this.changeList(event.target)}>Psychic</button>
        <button onClick={(event) => this.changeList(event.target)}>Bug</button>
        <button onClick={(event) => this.changeList(event.target)}>Electric</button>
        <button onClick={(event) => this.changeList(event.target)}>Poison</button>
        <button onClick={(event) => this.changeList(event.target)}>Normal</button>
        <button onClick={(event) => this.changeList(event.target)}>Dragon</button> */}

      </div>
    );
  }}

export default App;
