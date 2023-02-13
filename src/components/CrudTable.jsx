import React , { useState}from "react";
import CrudTableRow from "./CrudTableRow";
import "../styles/styles.css";
import Paginador from "./Paginador";
import ModalProduct from './ModalProduct'
const CrudTable = ({
  products,
  deleteProduct,
  setDataToEdit,
  paginationInfo,
  setPageNumber,
  setPageSize,
}) => {
  const [ modalProduct, setModalProduct ] = useState({product: {}, show: false})

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
                setModalProduct={setModalProduct}
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
      {
        modalProduct.show ? 
        <ModalProduct modalProduct={modalProduct} setModalProduct={setModalProduct}/>
        :
        null
      }
    </div>
  );
};

export default CrudTable;
