import { useState } from "react"
import { Link } from "react-router-dom"
import { getFetch } from "../../helpers/getFech"
import { Input } from "./Input"
import { useCartContext } from "../Context/CartContext"
import ItemCount from "../ItemListContainer/ItemCount"


const ItemDetail = ({productos = {}}) => {
    const [isCount, setIsCount] = useState(true)
    const { agregarCarrito, cartList } = useCartContext() 

    const onAdd = (count) => {
        console.log(count)
        agregarCarrito( { ...productos, cantidad: count } )
        setIsCount(false)
    }
    console.log(cartList)
    return (
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <img src={productos.foto} alt={productos.name} className="w-100" />
                    </div>
                    <div className="col">
                        <h2>Nombre: {productos.name}</h2>
                        <p>Categoría: {productos.categoria}</p>
                        <p>Precio: {productos.price}</p>
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
