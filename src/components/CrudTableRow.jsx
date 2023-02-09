import React from "react";
import {Button} from 'reactstrap'  
const CrudTableRow = ( {product , deleteProduct, setDataToEdit}) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.nombre}</td>
      <td>{product.precio}</td>
      <td>{product.stock}</td>
      <td>
        <Button
          onClick={() => setDataToEdit(product)}
          color="primary"
        >
          Editar
        </Button>{" "}
        <Button color="danger" onClick={() => deleteProduct(product.id)}> Eliminar</Button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
