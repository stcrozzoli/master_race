import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import {obtenerId} from '../../pseudoApi'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import Spinner from '../Spinner/Spinner'

const ItemDetailContainer = () => {

   const [detalle, setDetalle] = useState({})
   const [cargando, setCargando] = useState(true)


   const {idproducto} = useParams()
    useEffect(()=>{
        obtenerId(idproducto).then(detalle =>{
            setDetalle (detalle)
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