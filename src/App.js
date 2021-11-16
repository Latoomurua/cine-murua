import './App.css';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'
import data from './data/data'
import Peliculas from './componentes/Peliculas/Peliculas'

const App = () => {
  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi APP en ReactJS"/>
      <ItemCount />
    </div>
    <div>
      <Peliculas pelicula={data}/>
    </div>
    </>
  );
};

export default App;