import Item from "../Item/Item"

const ItemList = () => {
    return(
        <div>
                {productos.map(prod=> <Item/>)}
        </div>
    )
}

export default ItemList