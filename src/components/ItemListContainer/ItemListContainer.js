import {useState, useEffect} from 'react'
import {obtenerProductos} from '../../pseudoApi'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from '../Spinner/Spinner'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        obtenerProductos().then(response=>{
            setProductos(response)
        }).finally(()=>{
            setCargando(false)
        })
    }, [])

    if(cargando){
        return <Spinner />
    }

    return(
        <div className='contenedorMayor'>
            <h2 className='h2Listado'>Listado Productos</h2>
            <div className='contenedorTarjetas'>
                <ItemList productos={productos}/>
            </div>
        </div>
    )
}

export default ItemListContainer