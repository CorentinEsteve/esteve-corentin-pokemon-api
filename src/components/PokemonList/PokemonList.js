import React from "react";
import axios from "axios";

function PokemonList({ searchTerm = "" }) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;

  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    axios.get(url)
      .then((response) => {
        setList(response.data.results);
        console.log(response.data.results)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <ul>
      {list
        .filter((pokemon) => {
          return pokemon.name.includes(searchTerm);
        })
        .map((pokemon) => (
          <>
            <li key={pokemon.name}>{pokemon.name}</li>
            <img key={pokemon.url} src={pokemon.url} alt={pokemon.name} />
          </>
        ))}
    </ul>
  );
}

export default PokemonList;