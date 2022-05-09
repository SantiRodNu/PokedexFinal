import { Usefetch } from '../Api/Usefetch'
import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import Buscador from '../Nav/buscador'
import './pokemon.css'
// Este componente representa la pagina con el listado

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const pokemons = Usefetch(url) //estado tiene como valor el objeto que nos devuelve Usefetch con sus atributos
    const {loading, data} = pokemons;
    loading? console.log('cargando') : console.log(pokemons)
    let pokemones = data
    // Aca comprobamos que esta funcionando en la consola

    const onClicksort = () => {
        // const neWpokemones = data.results.sort()
        data.results.sort((a,b) => a.name - b.name);
        console.log(data)
        // pokemones = neWpokemones
    }
    
    return (
        <div>
            <button onClick={onClicksort} className='button' >Ordenar</button>
            <Buscador/>
            { loading? <h1>Cargando...</h1> : <Card results= {data.results} /> }

            <div className='button-contain'>
               {!loading && data.previous != null && <button onClick={()=>setUrl(data.previous)} className='button' >Anterior</button> }
                <button onClick={()=>setUrl(data.next)} className='button' >Siguiente</button>
            </div> 
        </div>
    )
}
export default Pokemon