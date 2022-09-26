import './Navbar.css'
import logo from './assets/logomr.png'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav>
            <button>Inicio</button>
            <button>Pc's Armadas</button>
            <img src= {logo} />
            <button>Componentes</button>
            <CartWidget />
        </nav>
    )
}

export default Navbar