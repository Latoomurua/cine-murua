import './App.css';
import NavBar from './componentes/NavBar'
import NavCart from './componentes/NavCart/NavCart'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi APP en ReactJS"/>
    </div>
    </>
  );
}

export default App;