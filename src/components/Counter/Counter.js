import './Counter.css'
import {useState} from 'react'

const Counter = () => {

    const [contador, setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1)
    }
    
    const restarContador = () => {
        contador > 0 ? setContador(contador - 1) : console.log('Has alcanzado el mínimo de items')
    }

    const onAdd = () => {
        console.log('Se agrego al carrito')
      }
    return (
        <div>
            <h2>Items</h2>
            <h2>{contador}</h2>
            <div>
                <button className= 'botonako' onClick={restarContador}>-</button>
                <button className= 'botonako' onClick={sumarContador}>+</button>
            </div>
            <button className= 'botonako2' onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}

export default Counter