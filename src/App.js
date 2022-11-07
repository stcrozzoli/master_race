import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';
import {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';

export const Context = createContext()

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/detail/:idproducto' element= {<ItemDetailContainer/>}/>
            <Route path='/cart' element= {<Cart/>}/>
            <Route path='/checkout' element= {<Checkout/>}/>
            <Route path= '*' element={<h1>Lo sentimos! No es posible encontrar ese producto</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
