import React from "react";
import {Button} from 'reactstrap'  
const CrudTableRow = ( {product}) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.precio}</td>
      <td>{product.stock}</td>
      <td>
        <Button
          onClick={() => {
            
          }}
          color="primary"
        >
          Editar
        </Button>{" "}
        <Button color="danger"> Eliminar</Button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
