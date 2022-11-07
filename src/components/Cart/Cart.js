import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import './Cart.css'



const Cart = () => {

    const {cart, removeItem, totalQuantity, clearCart, total} = useContext(CartContext)

    return(
        <section className='sectionPadre'>
            <div className="divTitulo">
                <h2>Listado de Productos</h2>
            </div>
            <div className='divProdsPadre'>
                {cart.map(prod => (
                    <div className='divProdsCarrito' key={prod.id}>
                        <div className='infoProd'>{prod.titulo}</div>
                        <div className='infoProd'>Precio: ${prod.precio}</div>
                        <div className='infoProd'>Cantidad total: {prod.cantidad}</div>
                        <button className='botonako3' onClick={()=>{removeItem(prod.id)}}>Remover Item</button> 
                    </div>
                ))}
            </div>
            <div className="divTotalCompra">
                <h2>Total de compra:${total}</h2>
            </div>
            <div className="divBotonakosCart">
                <button className='botonako4' onClick={clearCart}>Limpiar carrito</button>
                <Link className='botonako4' to={'/checkout'}>Finalizar compra</Link>
            </div>
        </section>
    )
}

export default Cart