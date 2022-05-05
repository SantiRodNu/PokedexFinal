import '././App.css';
import Headerboton from './components/Header/Headerboton';
import Buscador from './components/Nav/buscador'
import Pokemon from './components/Api/Pokemon'

function App() {
  return (
    <div className="App">
      <Headerboton /> 
        <div className='containerCards'>
        <Pokemon />
        </div>
    </div>
  );
}

export default App;
