import React, { useState , useEffect} from 'react'

const UnssignProducCategory = ( {cateBelongProduct,  products ,unssignCategoryToProduct, getCategoriesBelongProduct}) => {
  const [productId, setProductId] = useState(0);
  const [categoriaId, setCategoriaId] = useState(0) 
  useEffect( () => {
    console.log(productId)
  }, [productId])
  
  return (
    <div>
        <h3>"Desasingar categoria de producto"</h3>
        <div className='card-categoryproduct'>
          <label >Seleccione un producto</label>
          <select onChange={(e) => {
            getCategoriesBelongProduct(e.target.value)
            setProductId(e.target.value);
            }}>
              <option className='option' selected disabled="disabled" >Productos</option>
            {
              products.map( (product, index) => {
                return (
                  <option key={index} value={product.id}>{product.nombre}</option> 
                )
              })
            }  
          </select>
        </div>
        <div className='card-categoryproduct'>
          <label >Seleccione una categoria</label>
          <select onClick={e => setCategoriaId(e.target.value)}>
          <option selected disabled="disabled"  value="">Categorias</option>
            {
              cateBelongProduct && cateBelongProduct.length > 0 ?
              (cateBelongProduct.map( (cat, index) => {
                return (
                  <option key={index} value={cat.categoria_id}>{cat.nombre_categoria}</option>
                  )
                })
              ):null
              }
          </select>
        </div>
        {
          <button className='button button--blue' onClick={()=> unssignCategoryToProduct(productId, categoriaId)}>Desasingar categoria</button>
        }
      </div>
  )
}

export default UnssignProducCategory