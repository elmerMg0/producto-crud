import React from "react";
import CrudTableRow from "./CrudTableRow";
import "../styles/styles.css";
import Paginador from "./Paginador";

const CrudTable = ({
  products,
  deleteProduct,
  setDataToEdit,
  paginationInfo,
  setPageNumber,
  setPageSize,
}) => {
  return (
    <div className="contenedor-table">
      <h3 className="center">Products List</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <CrudTableRow
                key={index}
                product={product}
                deleteProduct={deleteProduct}
                setDataToEdit={setDataToEdit}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>No existen productos</td>
            </tr>
          )}
          <tr>
            <td colSpan={5}>
              <Paginador
                paginationInfo={paginationInfo}
                setPageNumber={setPageNumber}
                setPageSize={setPageSize}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
