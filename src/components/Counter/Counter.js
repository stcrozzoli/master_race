import './Counter.css'
import {useState} from 'react'

const Counter = ({stock = 5, initial = 1, onAdd}) => {

    const [cantidad, setCantidad] = useState(0)

    const sumarContador = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
        // cantidad < stock ? setCantidad(cantidad + 1) : null
    }
    
    const restarContador = () => {
        cantidad > 0 ? setCantidad(cantidad - 1) : console.log('Has alcanzado el mínimo de items')
    }

    return (
        <div>
            <h2>Items</h2>
            <h2>{cantidad}</h2>
            <div>
                <button className= 'botonako' onClick={restarContador}>-</button>
                <button className= 'botonako' onClick={sumarContador}>+</button>
            </div>
            {/* <button className= 'botonako2' onClick={onAdd}>Agregar al carrito</button> */}
            <button className= 'botonako2' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter