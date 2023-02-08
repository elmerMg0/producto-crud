import { useEffect, useState } from "react";
import { ApiServices } from "../services/api.services";

export default function Producto() {
  const [products, setProducts] = useState([]);
  const [infoProducts, setInfoProducts] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  useEffect(() => {
    getProducts();
  }, []);

  useEffect( ()=>{
    getProducts();

  }, [pageNumber])
//desmontaje de componentes
/*   useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third]) */
  

  function getProducts(){
    ApiServices.getProductos( pageNumber )
      .then((data) => {
        setProducts(data.data);
        setInfoProducts(data);
      })
  }

  function updateProduct(){
    ApiServices.updateProduct( { nombre: "Pepsi", descripcion: "Bebida pepsi", precio: "texto"} , 1)
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
