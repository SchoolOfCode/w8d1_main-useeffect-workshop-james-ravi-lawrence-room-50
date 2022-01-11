import { useState, useeffect, useEffect } from "react";

function PokemonViewer({ id }) {

  const [pokemon, setPokemon] = useState();

  useEffect(()=>{
async function fetchData() {

  const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`)
 //console.log(response)
 const data = await response.json();
 setPokemon(data) 
 //console.log(data)
}
fetchData([id]);
}, ([id]));



  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!
  return (
    <div className="pokemon-viewer">
      <p>display pokemon with id {pokemon.name} here!</p>
    </div>
  );
}

export default PokemonViewer;
