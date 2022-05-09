import '././App.css';
import Header from './components/Header/Header';
import Buscador from './components/Nav/buscador'
import Pokemon from './components/Api/Pokemon'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Buscador />
        <div className='containerCards'>
        <Pokemon />
        </div>
    </div>
  );
}

export default App;
