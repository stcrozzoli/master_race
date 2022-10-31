import './App.css';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Counter from './components/Counter/Counter';
import {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { CartProvider } from './context/CartContext';

export const Context = createContext()

function App() {
  // const [cart, setCart] = useState([])
  // const addItem = (productToAdd) => {
  //   if(!isInCart(productToAdd.id)){
  //     setCart([...cart, productToAdd])
  //   }
  //   else {
  //     console.log('Ya está agregado al carrito de compra')
  //   }
  // }

  // const isInCart = (id) => {
  //   return cart.some(prod => prod.id ===id)
  // }
  // console.log(cart)

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/detail/:idproducto' element= {<ItemDetailContainer/>}/>
            <Route path= '*' element={<h1>Lo sentimos! No es posible encontrar ese producto</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
