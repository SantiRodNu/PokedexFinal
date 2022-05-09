import { useState, useEffect } from 'react';

// Este componente hará la conexion con la APi y guardará la info que se obtendrá. Por eso se le da como parámetro la url con la que se va a conectar
export const Usefetch = (url) => {
    const [resultado, setResultado] = useState({loading:true, data:null});
// Usamos useEffect para que realice la accion de la funcion getDatos cuando se llame al componente
    useEffect( () => {
        getDatos(url);
    }, [url])

        const getDatos = async () => {
        try {
            setResultado({loading:true, data:null});
            const resp = await fetch(url);
            const data = await resp.json();  
            setResultado({loading:false, data})
        } catch (error) {
            
            
        }
    }
    return resultado
}
// Usefetch es creado de forma dinamica para no repetir codigo en los otros componentes, por eso se va a estar importando en casi todos ellos