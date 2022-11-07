import './ItemDetail.css'
import Counter from '../../components/Counter/Counter'
import { CartContext } from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({id, img, precio, descripcion, titulo, stock}) => {
    const {addItem, getProductQuantity} = useContext(CartContext)
    const [showCart, setShowCart] = useState(true)


    const onAdd = (cantidad) => {
        console.log('Se agrego al carrito')
        const productToAdd = {
            id, titulo, precio, cantidad
        }
        addItem (productToAdd, cantidad)
        setShowCart(false)
        
        toast.success('Pedido agregado correctamente! ✅', {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const cantidadAgregada = getProductQuantity(id)

    return(
        <div className='cardDetail'>
            <div className='divTitulo'>
                <p className='tituloDetalle'>
                {titulo}
                </p>
            </div>
            <div className='div2'>
                <div className='divImagenPrecio'>
                    <img src={img}/>
                    <p className='precioDetalle'>${precio}</p>
                </div>
                <div className='divDescripcionContador'>
                    <p className='descripcionDetalle'>{descripcion}</p>
                    <div className='contador'>
                    {/* {showCart === true ?<Counter onAdd={onAdd} stock={stock}/> : <Link to='/cart'className='botonako3'>Ir al carrito</Link>} */}
                    <Counter onAdd={onAdd} stock={stock} initial={cantidadAgregada}/>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ItemDetail