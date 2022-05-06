import { Usefetch } from '../Api/Usefetch'
import { useState } from 'react'
import { Card } from '../Card/Card'
import Buscador from '../Nav/buscador'
import './pokemon.css'

// Este componente representa la pagina con el listado

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const estado = Usefetch(url) //estado tiene como valor el objeto que nos devuelve Usefetch con sus atributos
    const {loading, data} = estado;
    loading? console.log('cargando') : console.log(data.results)
    // Aca comprobamos que esta funcionando en la consola
    return (
        <div>

            <Buscador/>
            { loading? <h1>Cargando...</h1> : <Card results= {data.results} /> }

            <div className='button-contain'>
                <button onClick={()=>setUrl(data.previous)} className='button' >Anterior</button>
                <button onClick={()=>setUrl(data.next)} className='button' >Siguiente</button>
            </div>
        </div>
    )
}
export default Pokemon