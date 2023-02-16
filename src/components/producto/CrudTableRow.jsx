import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';

const CrudTableRow = ( {product , deleteProduct, setDataToEdit, setModalProduct, edit, remove}) => {
  const {id, nombre, precio, stock } = product;

  return (
    <tr >
      <td onClick={()=> setModalProduct({product:product, show: true })}>{nombre}</td>
      <td>{precio}</td>
      <td>{stock}</td>
      <td className="center">
        {
          edit ? 
          <button className="button button--blue" onClick={() => setDataToEdit(product)}>edit</button>
          :
          <button className="button button--gris" disabled="disabled" onClick={() => setDataToEdit(product)}>edit</button>
        }{" "}
        {
          remove ? 
          <button className="button button--red" onClick={() => deleteProduct(id) }>Delete</button>
          :
          <button className="button button--gris" disabled="disabled" onClick={() => deleteProduct(id) }>Delete</button>
        }
        
      </td>
    </tr>
  );
};

export default CrudTableRow;
