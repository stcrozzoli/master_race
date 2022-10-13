import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';


function App() {
  const onAdd = () => {
    console.log('Se agrego al carrito')
  }
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer/>
        <Counter agregarAlCarrito= {onAdd}/>
    </div>
  );
}

export default App;
