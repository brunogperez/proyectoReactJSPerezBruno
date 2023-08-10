import React from "react";

export const ItemListContainer = (props) => {
    return (
        <div>
            <h1>Lista de productos</h1>
            <p>{props.texto}</p>
            <p>{props.texto}</p>
            <p>{props.texto}</p>
        </div>
    )
}

export default ItemListContainer;
