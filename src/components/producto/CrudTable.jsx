import React , { useState,useEffect}from "react";
import CrudTableRow from "./CrudTableRow";
import Paginador from "./Paginador";
import ModalProduct from './ModalProduct'
import {useSelector} from 'react-redux'

const CrudTable = ({
  products,
  deleteProduct,
  setDataToEdit,
  paginationInfo,
  setPageNumber,
  setPageSize,
}) => {
  const [ modalProduct, setModalProduct ] = useState({product: {}, show: false})
  const permissions = useSelector(state => state.login.permissions)
  const [edit, setEdit] = useState(false)
  const [remove, setRemove] = useState(false)

  useEffect( () => {
    if(permissions){
        setEdit(permissions.some(per => per.name === "editProducts"))
        setRemove(permissions.some(per => per.name === "editProducts"))
    }
},[permissions])
 
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
                edit={edit}
                remove={remove}
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
