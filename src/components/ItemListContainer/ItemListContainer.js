import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from '../Spinner/Spinner'
import {useParams} from 'react-router-dom'
import {collection, getDoc, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {categoryId} = useParams()

    useEffect(()=>{
        const colecref = categoryId ? query(collection(db,'productos'), where('category', '==', categoryId)) : collection(db,'productos')
        
        getDocs(colecref).then(response=>{
            const productosAdaptados = response.docs.map (doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(productosAdaptados)
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