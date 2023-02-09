import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";
import ProductForm from "./ProductForm";
import { Table, Container, Button } from "reactstrap";
import "../styles/styles.css";
import CrudForm from "./CrudForm";
import CrudTable from './CrudTable'

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [infoProducts, setInfoProducts] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [modalProduct, setModalProduct] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [dataToEdit , setDataToEdit] = useState(null);




  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [pageNumber]);
  //desmontaje de componentes

  function getProducts() {
    ApiServices.getProductos(pageNumber).then((data) => {
      setProducts(data.data);
      setInfoProducts(data);
    });
  }


  const  createProduct = (product) => {
    ApiServices.createProducto(product).then((res) => console.log(res));
  }

  const updateProduct = (product, id) => {
    ApiServices.updateProduct(product, id).then((res) => {
      console.log(res);
    });
    console.log("update product...");
  }
  const deleteProduct = (id) => {

  }

  return (
    <>
      <h3 className="center">Create new product</h3>
      <Container>
        <CrudForm createProduct={createProduct} updateProduct={updateProduct} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>
        {
          products.length > 0 ? 
          <CrudTable products={products} deleteProduct={deleteProduct} setDataToEdit={setDataToEdit}/>
          : 
          null
        }
      </Container>
    </>
  );
}
