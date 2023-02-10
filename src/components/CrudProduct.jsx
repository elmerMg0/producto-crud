import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";
//import { Table, Container, Button } from "reactstrap";
import "../styles/styles.css";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { toast, Toaster } from "react-hot-toast";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [infoProducts, setInfoProducts] = useState({});
  const [paginationInfo, setPaginationInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    getProducts();
  }, [pageNumber, pageSize]);
  //desmontaje de componentes

  function getProducts() {
    ApiServices.getProductos(pageNumber, pageSize).then((res) => {
      if(res.status === 200){
        setProducts(res.data);
        setPaginationInfo(res.pageInfo);
        console.log(200)
      }
      console.log(res);
    });
  }

  const showToast = (message, icon) => {
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
  };

  const createProduct = (product) => {
    ApiServices.createProducto(product).then((res) => {
      if (res.status === 201) {
        showToast(`${res.message}`, "✅");
      } else {
        showToast(`${res.message}, error: ${res.error}`, "✅");
      }
      console.log(res);
    });
  };

  const updateProduct = (product, id) => {
    ApiServices.updateProduct(product, id).then((res) => {
      getProducts();
      showToast(res.message, "✅");
    });
  };
  const deleteProduct = (id) => {
    let isDelete = window.confirm("¿Estas seguro de elimnar el producto?");
    if (isDelete) {
      ApiServices.deleteProduct(id).then((res) => {
        if (res === 200) {
          showToast(res.message, "✅");
        } else {
          showToast(res.message, "⚠️");
        }
      });
    }
  };

  return (
    <>
      <h3>
        {dataToEdit ? "Edit Product" : "Create New Producto"}{" "}
      </h3>
      <div className="container">
        <CrudForm
          createProduct={createProduct}
          updateProduct={updateProduct}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {products && products.length > 0 ? (
          <CrudTable
            products={products}
            deleteProduct={deleteProduct}
            setDataToEdit={setDataToEdit}
            paginationInfo={paginationInfo}
            setPageNumber={setPageNumber}
            setPageSize={setPageSize}
          />
        ) : null}
      </div>
      <Toaster />
    </>
  );
}
