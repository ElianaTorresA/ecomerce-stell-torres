import React from "react";

import ItemDetail from "./ItemDetail";

const getItems = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: 1,
        title: "Producto 1",
        pictureUrl: "https://i.linio.com/p/a815de1c590bfc12db4929f315e4f1ac-product.webp",
        description:
          "Camisa Hombre",
        price: "$500"
      }
    ]);
  }, 2000);
});

const ItemDeteailContainer = () => {
  const [itemDetailResq, setItemDetailResq] = React.useState();

  React.useEffect(() => {
    getItems.then((res) => {
      setItemDetailResq(res[0]);
    });
  }, []);
  console.log(itemDetailResq);
  return (
    <>
      {itemDetailResq === undefined ? (
        <p>loading</p>
      ) : (
        <ItemDetail
          id={itemDetailResq.id}
          title={itemDetailResq.title}
          pictureUrl={itemDetailResq.pictureUrl}
          description={itemDetailResq.description}
          price={itemDetailResq.price}
        />
      )}
    </>
  );
};

export default ItemDeteailContainer