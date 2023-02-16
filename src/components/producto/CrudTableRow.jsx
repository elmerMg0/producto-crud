import React, { useEffect, useState } from "react";
const CrudTableRow = ( {product , deleteProduct, setDataToEdit, setModalProduct}) => {
  const {id, nombre, precio, stock } = product;

  return (
    <tr >
      <td onClick={()=> setModalProduct({product:product, show: true })}>{nombre}</td>
      <td>{precio}</td>
      <td>{stock}</td>
      <td className="center">
        <button className="button button--blue"
          onClick={() => setDataToEdit(product)}
         
        >
          edit
        </button>{" "}
        <button className="button button--red" onClick={() => deleteProduct(id) }>Delete</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
