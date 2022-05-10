import { Usefetch } from '../Api/Usefetch'
import './detalles.css'

const Detalles = ({url}) => {
    const estado = Usefetch(url)
    const {loading, data} = estado
    
return (
    <div>
        {loading? <h1>Cargando2</h1> :
        <main className='cardContainer'>
            <header className='header-modal'>
                <h1>{data.name}</h1>
                <h3>#{data.id}</h3>
            </header>
            <div className='img-card'>
                <img src={data.sprites.other.dream_world.front_default} alt="Pokemon" />
            </div>
            <div className='types'>
                <h4>{data.types.map((tipo, index) =>
                { return ( <p>{tipo.type.name}</p> )
                 })} </h4>
                
            </div>
            <div>
                <h2>About</h2>
            </div>
            <section>
                <div>
                    <img src="" alt="" />
                    <p>{data.weight}</p>
                    <h5>Weight</h5>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>{data.height}</p>
                    <h5>Height</h5>
                </div>
                <div>
                    <p>{data.abilities.map((moves, index) => {
                        return (<p>{moves.ability.name}</p> )
                    })}</p>
                    
                    <h5>Moves</h5>
                </div>
            </section>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam qui unde. Dolores quam, quaerat</p>
            </div>
            <section>
                <h2>Base Stats</h2>
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
            </section>
        </main>
        }
    </div>
    )
}
export default Detalles