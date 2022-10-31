import './ItemDetail.css'
import Counter from '../../components/Counter/Counter'
import { Context } from '../../App'
import { useContext } from 'react'

const ItemDetail = ({id, img, precio, descripcion, titulo, stock}) => {
    const [cart, setCart] = useContext(Context)


    const onAdd = (cantidad) => {
        console.log('Se agrego al carrito')

        
        const productToAdd = {
            id, titulo, precio, cantidad
        }
        setCart([...cart, productToAdd])
    }

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
                    <Counter onAdd={onAdd} stock={stock}/>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail