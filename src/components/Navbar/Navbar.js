import './Navbar.css'
import logo from './assets/logomr.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <button className='button'>Inicio</button>
            <Link className='button' to={`/`}>Pc's Armadas</Link>
            <Link to={`/`}>
                <img src= {logo} />
            </Link>
            <button className='button'>Componentes</button>
            <CartWidget />
        </nav>
    )
}

export default Navbar