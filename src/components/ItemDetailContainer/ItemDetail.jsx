import React from "react";

const ItemDetail = ({ id, title, pictureUrl, description, price }) => {
    return (
        <>
            <p>{id}</p>
            <p>{title}</p>
            <p>{pictureUrl}</p>
            <p>{description}</p>
            <p>{price}</p>
        </>
    );
};

export default ItemDetail;