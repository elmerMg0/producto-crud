import React , { useState,useEffect}from "react";
import CrudTableRow from "./CrudTableRow";
import Paginador from "./Paginador";
import ModalProduct from './ModalProduct'
import {useSelector} from 'react-redux'
import { createGlobalStyle } from "styled-components";

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
  const [productsFilter, setProductsFilter] = useState([])

  useEffect( () => {
    if(permissions){
        setEdit(permissions.some(per => per.name === "editProducts"))
        setRemove(permissions.some(per => per.name === "editProducts"))
    }
},[permissions])
 
  const handleSearchProduct = (e) => {
      setProductsFilter(products.filter(prod => prod.nombre.includes(e.target.value)))
      console.log(e.target.value)
    }
return (
    <div className="contenedor-table">
      <h3 className="center">Products List</h3>
      <div>
      <input type="search" onChange={handleSearchProduct}/>
      </div>
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
          {productsFilter && productsFilter.length > 0 ? (

            productsFilter.map((product, index) => (
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
