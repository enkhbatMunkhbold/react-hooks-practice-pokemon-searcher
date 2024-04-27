import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchingName, setSearchingName] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemons => setPokemons(pokemons))
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon])
  }

  function handleSearchPokemon(name) {
    setSearchingName(name)
  }

  const displayPokemons = pokemons.filter(pokemon => pokemon.name.includes(searchingName))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearchPokemon={handleSearchPokemon}/>
      <br />
      <PokemonCollection pokemons={displayPokemons}/>
    </Container>
  );
}

export default PokemonPage;
