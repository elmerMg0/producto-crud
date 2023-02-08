import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [infoProducts, setInfoProducts] = useState({})
  const [pageNumber, setPageNumber] = useState(200)
  useEffect(() => {
    getProducts();
  }, []);

  useEffect( ()=>{
    getProducts();

  }, [pageNumber])

  function getProducts(){
    ApiServices.getProductos( pageNumber )
      .then((data) => {
        setProducts(data.data);
        setInfoProducts(data);
      })
  }

  function updateProduct(){
    ApiServices.updateProduct( { name: "Pepsi", descripcion: "Bebida de cola", precio: "1.5"} , 1)
                .then((res)=> {
                    console.log(res)
                })
  }

  return (
    <div>
      {products && products.length > 0 ? (
        products.map((product, index) => {
          return (
            <div key={index} style={ {border: "1px solid orange"} }>
              <h5>{product.id}</h5>
              <h5>{product.nombre}</h5>
              <h5>{product.stock}</h5>
            </div>
          );
        })
      ) : (
        <h5>No existen productos</h5>
      )}
      <button onClick={()=>setPageNumber( infoProducts.previus )}>Previus</button>
      <button onClick={()=>setPageNumber( infoProducts.next )}>Next</button >
      <button onClick={()=> updateProduct() }>Update</button >
    </div>  
  );
}
