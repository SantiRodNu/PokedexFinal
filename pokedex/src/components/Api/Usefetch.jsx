import { useState, useEffect } from 'react';

// Este componente hará la conexion con la APi y guardará la info que se obtendrá. Por eso se le da como parámetro la url con la que se va a conectar
export const Usefetch = (url) => {
    const [resultado, setResultado] = useState({loading:true, data:{results: []}});
// Usamos useEffect para que realice la accion de la funcion getDatos cuando se llame al componente
    useEffect( () => {
        getDatos(url);
    }, [url])

        const getDatos = async () => {
        try {
            const resp = await fetch(url);
            if(resp.ok) {
            const data = await resp.json();  
            setResultado({loading:false, data})
            console.log(data)
        } else {
            console.log(resp.status, resp.statusText);
        }
        } catch (error) {
            console.log(error);
            
        }
    }
    return resultado
}
// Usefetch es creado de forma dinamica para no repetir codigo en los otros componentes, por eso se va a estar importando en casi todos ellos