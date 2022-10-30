import {useState, useEffect} from 'react'
import {obtenerProductos, obtenerCategoria} from '../../pseudoApi'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from '../Spinner/Spinner'
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {categoryId} = useParams()
    useEffect(()=>{
        const funcCategory = categoryId ? obtenerCategoria : obtenerProductos
        funcCategory(categoryId).then(response=>{
            setProductos(response)
        }).finally(()=>{
            setCargando(false)
        })
    }, [categoryId])

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