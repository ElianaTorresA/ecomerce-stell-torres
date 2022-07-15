import { useEffect } from "react"
import { useState } from "react"
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {

  const onAdd = (count) => {
    alert('Compraste:' + count)
  }
  const [items, setItems] = useState([])

  const productos = [
    {id: 1, name: 'Producto 1', price: 100, stock: 10, image: 'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp'},
    {id: 2, name: 'Producto 2', price: 200, stock: 20, image: 'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp'},
    {id: 3, name: 'Producto 3', price: 300, stock: 30, image: 'https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp'},
  ]

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  })

  useEffect(() => {
    task
      .then(resolve => setItems(resolve))
      .catch(error => console.log(error))
  }, [])
  
  console.log(items)

  return (
    <div style={{ textAlign: "center", marginTop: 100}}>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer