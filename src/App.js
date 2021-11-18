import './App.css';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'
import data from './data/data'
import Peliculas from './componentes/Peliculas/Peliculas'
import { useState, useEffect } from 'react';

const App = () => {

  const [datos, setDatos] = useState([]);
  const [error, setError] = useState({
    isError: false,
  });

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => response.json())
    .then(response => setDatos(response.abilities))
    }, []);

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
    <ol>
      {
        error.isError
        ? <p>Hubo un error</p>
        : datos.map((dato) => <li key={dato.id}>{dato.ability.name}</li>)
      }
    </ol>
    </>
  );
};

export default App;