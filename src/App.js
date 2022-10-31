import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';
import {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';

export const Context = createContext()

function App() {

  const [cart, setCart] = useState([])

  console.log(cart)

  return (
    <div className="App">
      <Context.Provider value={[cart, setCart]}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/detail/:idproducto' element= {<ItemDetailContainer/>}/>
            <Route path= '*' element={<h1>Lo sentimos! No es posible encontrar ese producto</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
