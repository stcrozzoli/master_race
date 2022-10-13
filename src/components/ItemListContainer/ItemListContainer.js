import {useEffect, useState} from 'react'
import { obtenerProductos } from '../../pseudoApi'
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        obtenerProductos().then(response=>{
            console.log(response)
            setProductos(response)
        })
    },[])


    return(
        <div>
            <h2>Listado Productoss</h2>
            <div className='contenedorTarjetas'>
                {/* {productos.map(prod=>
                    <div key={prod.id}className="tarjeta">
                        <img src={prod.img}></img>
                        <li className='titulo'>{prod.titulo}</li>
                        <p className='precio'>${prod.precio}</p>
                    </div>
                )} */}

                <ItemListContainer productos = {productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer