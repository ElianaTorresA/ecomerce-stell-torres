import { useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { getFetch } from "react"
import { useState } from "react"


const ItemDetailConteiner = () => {
    const [ producto, setProducto ] =  useState({})
    const { productId } = useParams()

    useEffect( ()=> {
        getFetch(productId)
        .then( data => setProducto(data) )
    }, [productId])
    
    return ( 
        <div>            
            <ItemDetail producto={producto} />            
        </div>
    )
}

export default ItemDetailConteiner
