// Crearemos la estructura básica
// Importamos el Usefetch para extraer la informacion de la url que tiene cada pokemon
import { Usefetch } from '../Api/Usefetch'
import './cardPokemon.css'

export const CardPokemon = ({url}) => {
    const estado = Usefetch(url)
    const {loading, data} = estado
    return (
        // Este componente CardPokemon es el encargado de mostrar la info de cada pokemon
        // La url que se le está poasando a este componente es la que tiene cada uno de los pokemon, que da un objeto con sus datos
        <div>
            {loading? <h1>Cargando</h1> : 
            <div className='container'>
                <div className='id'>
                    <h2>{data.id}</h2>  
                </div>
                <div className='img'> 
                    <img src={data.sprites.front_default} alt="pokemon" />
                </div>
                <div className='name'> 
                    <h2>{data.forms[0].name}</h2>
                </div>
            </div>
            }
        </div>
    )
}