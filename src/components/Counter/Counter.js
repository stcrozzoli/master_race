import './Counter.css'
import {useState} from 'react'

const Counter = ({stock = 5, initial = 1, onAdd}) => {

    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
        // contador < stock ? setContador(contador + 1) : null
    }
    
    const restarContador = () => {
        contador > 0 ? setContador(contador - 1) : console.log('Has alcanzado el mínimo de items')
    }

    return (
        <div>
            <h2>Items</h2>
            <h2>{contador}</h2>
            <div>
                <button className= 'botonako' onClick={restarContador}>-</button>
                <button className= 'botonako' onClick={sumarContador}>+</button>
            </div>
            {/* <button className= 'botonako2' onClick={onAdd}>Agregar al carrito</button> */}
            <button className= 'botonako2' onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}

export default Counter