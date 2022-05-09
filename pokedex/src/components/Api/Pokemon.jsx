import { Usefetch } from "../Api/Usefetch";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import Buscador from "../Nav/buscador";
import "./pokemon.css";

// Este componente representa la pagina con el listado

const Pokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const estado = Usefetch(url); //estado tiene como valor el objeto que nos devuelve Usefetch con sus atributos
  const { loading, data } = estado;
  //   loading ? console.log("cargando") : console.log(data.results);
  const [pokemon, setPokemon] = useState(data);
  // Aca comprobamos que esta funcionando en la consola

  useEffect(() => {
    if (data) {
      setPokemon(data.results);
    }
  }, [data]);

  const onClickTest = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  return (
    <div>
      <button onClick={onClickTest} className="button">
        Ordenar
      </button>
      <Buscador />
      {loading ? <h1>Cargando...</h1> : <Card results={pokemon} />}

      <div className="button-contain">
        <button onClick={() => setUrl(data.previous)} className="button">
          Anterior
        </button>
        <button onClick={() => setUrl(data.next)} className="button">
          Siguiente
        </button>
      </div>
    </div>
  );
};
export default Pokemon;