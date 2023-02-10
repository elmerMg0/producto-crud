import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";
//import { Table, Container, Button } from "reactstrap";
import "../styles/styles.css";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { toast, Toaster } from "react-hot-toast";
import ProductCategory from "./ProductCategory";
import UnssignProducCategory from "./UnssignProducCategory";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [infoProducts, setInfoProducts] = useState({});
  const [paginationInfo, setPaginationInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataToEdit, setDataToEdit] = useState(null);

  useEffect(() => {
    getCategories();
    getCategoriesBelongProduct();
  }, []);

  useEffect(() => {
    getProducts();
  }, [pageNumber, pageSize]);
  //desmontaje de componentes

  const getCategoriesBelongProduct = ( id ) => {
    ApiServices.getCategoriesBelongProduct( id )
                .then( res => console.log(res))
  }

  const getCategories = () => {
    ApiServices.getCategories().then((res) => {
      console.log(res);
      setCategories(res.categories);
    });
  };

  function getProducts() {
    ApiServices.getProductos(pageNumber, pageSize).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        setPaginationInfo(res.pageInfo);
      }
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
      console.log(res);
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

  const assignCategoryToProduct = (productId, categoryId) => {
    ApiServices.assignCategoryProduct(productId, categoryId).
                then((res) =>{
                  res.status === 200 ? showToast(res.message, "✅") : showToast(res.message,  "⚠️") 
                }
    );
  };

  const unssignCategoryToProduct = (productId, categoryId) => {
    ApiServices.unssignCategoryProduct(productId, categoryId).
                then((res) =>{
                  res.status === 200 ? showToast(res.message, "✅") : showToast(res.message,  "⚠️") 
                }
    );
  };

  return (
    <>
      <h3>{dataToEdit ? "Edit Product" : "Create New Producto"} </h3>
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
      <div className="">

        <ProductCategory
          categories={categories}
          products={products}
          assignCategoryToProduct={assignCategoryToProduct}
          />
        
        <UnssignProducCategory
          categories={categories}
          products={products}
          unssignCategoryToProduct={unssignCategoryToProduct}
          />
        
      </div>
      <Toaster />
    </>
  );
}
