import './App.css';
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount'

function App() {
  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi APP en ReactJS"/>
      <ItemCount />
    </div>
    </>
  );
}

export default App;