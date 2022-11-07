import './Checkout.css'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')

    const crearOrden = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    mail: mail
                },
                items: cart,
                total: total
            }
            
            const batch = writeBatch(db)
            const sinStockStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    sinStockStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(sinStockStock.length === 0) {
                await batch.commit()
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 7000)

                console.log(`El ID de su orden de compra es: ${orderAdded.id}`)
                toast.success(`El ID de su orden de compra es: ${orderAdded.id}`, {
                    position: "bottom-right",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            } else {
               console.log('Existen productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h2 style={{color:'white'}}>Generando Orden, por favor espere</h2>
    }

    return (
        <div className="divForm">
            <h1>Confirmar Compra</h1>
            <form className='formulario'>
                <input className='inputForm' id="nombre" type='text' placeholder="Nombre" value={name} onChange={e => setName(e.target.value)}></input>
                <input className='inputForm' id="telefono" type='tel' placeholder="Teléfono" value={phone} onChange={e => setPhone(e.target.value)}></input>
                <input className='inputForm' id="mail" type='email' placeholder="Email" value={mail} onChange={e => setMail(e.target.value)}></input>
            </form>

            <button className='buttonOrden' onClick={crearOrden}>Crear Orden</button>
            <ToastContainer />
        </div>
    )
}

export default Checkout