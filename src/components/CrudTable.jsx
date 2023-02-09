import React from "react";
import CrudTableRow from "./CrudTableRow";
import { Button, Table } from "reactstrap";
import "../styles/styles.css"



const CrudTable = ({ products }) => {
  return (
    <div>
      <h3 className="center">List of products</h3>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? 
            products.map((product, index) =>  <CrudTableRow key={index} product={product} />)
           : 
            <tr>
              <td colSpan={5}>No existen elementos aun</td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default CrudTable;
