import './Navbar.css'
import logo from './assets/logomr.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link className= 'button' to={`/`}>Inicio</Link>

            <Link className='button' to={'/category/gamer'}>Pc's Gamers</Link>
            <Link to={`/`}>
                <img src= {logo} />
            </Link>
            <Link className='button' to={'/category/oficina'}>Pc's Oficina</Link>
     
            <CartWidget />
        </nav>
    )
}

export default Navbar