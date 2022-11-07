import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import Spinner from '../Spinner/Spinner'
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../../services/firebase"


const ItemDetailContainer = () => {

   const [detalle, setDetalle] = useState({})
   const [cargando, setCargando] = useState(true)
   const {idproducto} = useParams()

    useEffect(()=>{
        const documentRef = doc(db, 'productos', idproducto)
        getDoc(documentRef).then(response => {
            const data = response.data()
            const productoAdaptado = {id: response.id, ...data}
            setDetalle (productoAdaptado)
        }).finally(()=>{
            setCargando(false)
        })
    })

    if(cargando){
        return <Spinner />
    }

    return(
        <div className='divDetailContainer'>
            <h2 className='h2Detalle'>Detalle</h2>
            <ItemDetail {...detalle}/>
        </div>
    )
}

export default ItemDetailContainer