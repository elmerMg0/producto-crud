import React from 'react'

const UnssignProducCategory = ( unssignCategoryToProduct, products, categories) => {
  return (
    <div>
        <h5>"Desasingar categoria de producto"</h5>
        <div>
          <label htmlFor="">Seleccione un producto</label>
          <select onChange={(e) => e}>
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
          <select onChange={(e) => e}>
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
          <button onClick={()=> unssignCategoryToProduct("", "")}>Desasingar categoria</button>
        }
      </div>
  )
}

export default UnssignProducCategory