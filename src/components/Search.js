import React from "react";

function Search({ onSearchPokemon }) {

  function handleChange(e) {
    onSearchPokemon(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
