import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";
import { Table, Container, Button } from "reactstrap";
import "../styles/styles.css";
import CrudForm from "./CrudForm";
import CrudTable from './CrudTable'
import { toast , Toaster} from "react-hot-toast";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [infoProducts, setInfoProducts] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [modalProduct, setModalProduct] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [dataToEdit , setDataToEdit] = useState(null);





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

  const showToast = ( message, icon) =>
  {
    toast(message, {
      icon: icon,
      duration: 3000,
      style: {
        border: "2px solid #ff7c01",
        padding: "10px",
        color: "#fff",
        background: "#000",
        borderRadius: "4%",
      },
    });
  } 

  const  createProduct = (product) => {
    ApiServices.createProducto(product).then((res) =>{ 
      if(res.status === 201){
        showToast( `${res.message}` , "✅" )
      }else{
        showToast( `${res.message}, error: ${res.error}` , "✅" )
      }
    })
  }


  const updateProduct = (product, id) => {
    ApiServices.updateProduct(product, id).then((res) => {
      getProducts();
      toast("Pagos Establecidas", {
        icon: "✅",
        duration: 3000,
        style: {
          border: "2px solid #ff7c01",
          padding: "10px",
          color: "#fff",
          background: "#000",
          borderRadius: "4%",
        },
      });
    });
  }
  const deleteProduct = (id) => {
    ApiServices.deleteProduct(id)
                .then( res => console.log(res));
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
      <Toaster />
    </>
  );
}
