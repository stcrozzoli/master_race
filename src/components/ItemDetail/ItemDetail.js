import './ItemDetail.css'
import Counter from '../../components/Counter/Counter'

const ItemDetail = ({id, img, precio, descripcion, titulo}) => {
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

                    <Counter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail