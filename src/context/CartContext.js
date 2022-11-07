import { useState, useEffect, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)
    console.log(cart)

    useEffect(() => {
      const total = getTotal()
      setTotal(total)
    }, [cart]) 

    useEffect(()=>{
        const cantidadTotal = getQuantity()
        setTotalQuantity(cantidadTotal)
    },[cart])

    const addItem = (productToAdd, cantidad) => {

      if(!isInCart(productToAdd.id)){
        
        setCart([...cart, productToAdd])
      }
      else {
        const cartUpdate = cart.map(prod =>{
          if (prod.id === productToAdd.id){
            const productUpdate = {
              ...prod, cantidad: cantidad 
            }
            return productUpdate
          }
          else{
            return prod
          }
        })
        setCart(cartUpdate)
        console.log('Ya está agregado al carrito de compra')
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
      const cartWithoutProduct = cart.filter(prod => prod.id !== id)
  
      setCart(cartWithoutProduct)
    }
 
    const getQuantity = () => {
        let contador = 0

        cart.forEach(prod => {
            contador += prod.cantidad
        })

        return contador
    }

    const clearCart = () => {
      setCart([])
  }

  const getProductQuantity = (id) => {
    const product = cart.find (prod => prod.id === id)

    return product?.cantidad
  }

  const getTotal = () => {
    let contador = 0

    cart.forEach(prod => {
        contador += prod.cantidad * prod.precio
    })

    return contador
}

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, clearCart, total, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}