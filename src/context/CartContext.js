import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    console.log(cart)

    useEffect(()=>{
        const cantidadTotal = getQuantity()
        setTotalQuantity(cantidadTotal)
    },[cart])

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])

      }
      else {
        console.log('Ya está agregado al carrito de compra')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod=>prod.id !== id)
        setCart(cartWithoutProduct)

    }
 
    const getQuantity = () => {
        let contador = 0

        cart.forEach(prod => {
            contador += prod.cantidad
        })

        return contador
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}