import React, { useState } from 'react'

const AssignCataProduc = ( {accion, categories , products, assignCategoryToProduct, unssignCategoryToProduct} ) => {
    const [productId, setProductId] = useState(1)
    const [categoryId, setCategoryId] = useState(1)

  return (
    <div>
        <h5>"Asignar categoria a producto"</h5>
        <div>
          <label>Seleccione un producto</label>
          <select onChange={(e) => setProductId(e.target.value)}>
            {
              products.map( (product, index) => {
                return (
                  <option key={index} value={product.id}>{product.nombre}</option> 
                )
              })
            }  
          </select>
        </div>
        <div>
          <label >Seleccione una categoria</label>
          <select onChange={(e) => setCategoryId(e.target.value)}>
            {
              categories.map( (cat, index) => {
                return (
                  <option key={index} value={cat.id}>{cat.nombre}</option>
                )
              })
            }
          </select>
        </div>
        {
          <button onClick={()=> assignCategoryToProduct(productId, categoryId)}>Asingar categoria</button>
        }
      </div>
  )
}

export default AssignCataProduc