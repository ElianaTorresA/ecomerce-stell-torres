import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "./Input"
import { useCartContext } from "../Context/CartContext"
import ItemCount from "../ItemListContainer/ItemCount"

const ItemDetail = ({producto = {}}) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarCarrito, cartList } = useCartContext() 

    const onAdd = (count) => {
        console.log(count)
        agregarCarrito( { ...producto, cantidad: count } )
        setIsCount(false)
    }
    console.log(cartList)
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src={producto.foto} alt={producto.name} className="w-100" />
                    </div>
                    <div className="col">
                        <h2>Nombre: {producto.name}</h2>
                        <p>Categoría: {producto.categoria}</p>
                        <p>Precio: {producto.price}</p>
                    </div>
                </div>
            </div>
            <div className="col">
                { isCount ? 
                        <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
                    : 
                        <Link to='/cart'>
                            <button className="btn btn-outline-primary">Ir a Cart</button> 
                        </Link>
                }                
            </div>
        </div>
    )
}

export default ItemDetail
