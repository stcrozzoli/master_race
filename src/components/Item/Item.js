const Item = () => {
    return(
        <div key={prod.id}className="tarjeta">
            <img src={prod.img}></img>
            <li className='titulo'>{prod.titulo}</li>
            <p className='precio'>${prod.precio}</p>
        </div>
    )
}

export default Item