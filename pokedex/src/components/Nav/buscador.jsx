import { useState } from 'react'
import {Card} from "../Card/Card"

function Buscador({results}) {
const [pokemonFilter, setPokemonFilter] = useState("") ;

  return (

    <div className="app">
      <div>
        <input 
        placeholder="Buscar"  
        name="query" 
        type="text" 
        onChange={(event)=>{setPokemonFilter(event.target.value)}} 
        />
      </div>
      {results
      .filter((val)=> {
        return val.name.toLowerCase().includes(pokemonFilter.toLowerCase())})
      .map((val)=>{
        return <Card results={val} />
      })}
    </div>
  );
}

export default Buscador;
