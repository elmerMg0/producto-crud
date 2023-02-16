import React, { useState } from 'react'

const AssignCataProduc = ( {accion, categories , products, assignCategoryToProduct, unssignCategoryToProduct} ) => {
    const [productId, setProductId] = useState(1)
    const [categoryId, setCategoryId] = useState(1)

  return (
    <div>
        <h3>"Asignar categoria a producto"</h3>
        <div className='card-categoryproduct'>
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
        <div className="card-categoryproduct">
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
          <button className='button button--blue' onClick={()=> assignCategoryToProduct(productId, categoryId)}>Asingar categoria</button>
        }
      </div>
  )
}

export default AssignCataProduc