import { useEffect, useState } from "react";
import { ApiServices, userServices, genericRequest} from "../services/api.services";
//import { Table, Container, Button } from "reactstrap";
import "../styles/styles.css";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import { toast, Toaster } from "react-hot-toast";
import AssignProductCategory from "./AssignProductCategory";
import UnssignProducCategory from "./UnssignProducCategory";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([  ]);
  const [infoProducts, setInfoProducts] = useState({});
  const [paginationInfo, setPaginationInfo] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [productId, setProductId] = useState(1)
  const [cateBelongProduct, setCateBelongProduct] = useState([])
  useEffect(() => {
    getCategories();
    getCategoriesBelongProduct()
    userServices.setToken( JSON.parse(localStorage.getItem("userLoginToken")))
  }, []);

  useEffect(() => {
    getProducts();
  }, [pageNumber, pageSize]);

/*   useEffect(() => {
    getCategoriesBelongProduct();
  }, [cateBelongProduct]); */

  //desmontaje de componentes

  const getCategoriesBelongProduct = ( id = 0 ) => {
    const params = `producto_id=${id}`
    genericRequest.get("producto/get-categories-belong-product?",params)
                .then( res => {
                 if(res.status === 200)setCateBelongProduct(res.categories)
                })
  }

  const getCategories = () => {
    genericRequest.get("categoria/index").then((res) => {
      console.log(res);
      setCategories(res.categories);
    });
  };

  function getProducts() {
    const params = `page=${pageNumber}&pageSize=${pageSize}`
    genericRequest.get( "producto/index?",params).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        setPaginationInfo(res.pageInfo);
      }
    });


  /*   ApiServices.getProductos(pageNumber, pageSize).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
        setPaginationInfo(res.pageInfo);
      }
    }); */
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
    genericRequest.post("producto/create","",product).then((res) => {
      if (res.status === 201) {
        showToast(`${res.message}`, "✅");
      } else {
        showToast(`${res.message}, error: ${res.error}`, "✅");
      }
      console.log(res);
    });
  };

  const updateProduct = (product, id) => {
    const params = `id=${id}`
    genericRequest.post("producto/update?",params ,product).then((res) => {
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
        getProducts();
      });
    }
  };

  const assignCategoryToProduct = (productId, categoryId) => {
    const params = `producto_id=${productId}&categoria_id=${categoryId}`

    genericRequest.get( "producto/assign-category?" ,params).
                then((res) =>{
                  res.status === 200 ? showToast(res.message, "✅") : showToast(res.message,  "⚠️") 
                }
    );
  };

  const unssignCategoryToProduct = (productId, categoryId) => {
    const params = `producto_id=${productId}&categoria_id=${categoryId}`
    genericRequest.get("producto/unssign-category?", params).
                then((res) =>{
                  res.status === 200 ? showToast(res.message, "✅") : showToast(res.message,  "⚠️") 
                  getCategoriesBelongProduct( productId );
                }
    );
  };

  return (
    <div className="container-global">
      <h3>{dataToEdit ? "Edit Product" : "Create New Producto"} </h3>
      <div className="container">
        <CrudForm
          createProduct={createProduct}
          updateProduct={updateProduct}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
          <CrudTable
            products={products}
            deleteProduct={deleteProduct}
            setDataToEdit={setDataToEdit}
            paginationInfo={paginationInfo}
            setPageNumber={setPageNumber}
            setPageSize={setPageSize}
          />
      </div>
      <div className="product-category">

        <AssignProductCategory
          categories={categories}
          products={products}
          assignCategoryToProduct={assignCategoryToProduct}
          />
      
          <UnssignProducCategory
          cateBelongProduct={cateBelongProduct}
          products={products}
          unssignCategoryToProduct={unssignCategoryToProduct}
          getCategoriesBelongProduct={getCategoriesBelongProduct}
          />
        
      </div>
      <Toaster />
    </div>
  );
}
