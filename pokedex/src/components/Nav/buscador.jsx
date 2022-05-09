import { useState } from "react";
import Pokemon from "../Api/Pokemon";


const Buscador = () => {

  // const [searchTerm, setSearchTerm] = useState("")

  // const pokemon = Pokemon()
  // console.log (pokemon)
  // const filterPokemons = (pokemones) => pokemones.filter((pokemon)=>  pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) )
   
  // const pokemonsFilter = filterPokemons(pokemon)

  // return <div className="App">
  //   <input type="text" placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}} />
  // {pokemonsFilter.map((pokemon, key)=>{
  //   return (
  //   <div className="user" key={key}>
  //     <img src={pokemon.img} alt="figura pokemon" />
  //     <p>{pokemon.name}{pokemon.id}{pokemon.about.weight}</p>
  //   </div>
  //   )

  // })}
  // </div>
}
export default Buscador;