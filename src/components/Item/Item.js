import { Link } from "react-router-dom"
import './Item.css'

const Item = ({id, img, titulo, precio}) => {
    return(
        <div className="tarjeta">
            <img src={img}/>
            <Link className='titulo' to={`/detail/${id}`}>
            <li className='titulo'>{titulo}</li>
            </Link>
            <p className='precio'>${precio}</p>
        </div>
    )
}

export default Item