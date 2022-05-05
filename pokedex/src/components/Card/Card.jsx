// Contenedor que tiene todads las cards de los pokemon
import {CardPokemon} from './CardPokemon'
// Recibe como parámetro el arreglo que cointiene los 20 pokemon iniciales (De Usefetch)
export const Card = ({results}) => {
    return (
        <div>
            <ul>
                {results.map( p=> ( //Se hace un recorrido al array para obtener el url de cada pokemon, para mandar su url al componente CardPokemon
                        <li key={p.name}>
                            <CardPokemon url={p.url} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}