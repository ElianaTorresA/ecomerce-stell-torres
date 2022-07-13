import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {

  const onAdd = (count) => {
    alert('Compraste:' + count)
  }

  return (
    <div style={{ textAlign: "center", marginTop: 100}}>
    <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer