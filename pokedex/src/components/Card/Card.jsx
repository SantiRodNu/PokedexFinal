// Contenedor que tiene todads las cards de los pokemon
import {CardPokemon} from './CardPokemon'
// Recibe como parámetro el arreglo que cointiene los 20 pokemon iniciales (De Usefetch)
import "../Api/pokemon.css";
export const Card = ({results}) => {
        return (
        <div className='display'>
            <ul>                
             <li> <CardPokemon url={results.url} /> </li>
            </ul>
        </div>
    )
}