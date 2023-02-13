import React from 'react'

const ModalProduct = ( {modalProduct, setModalProduct}) => {
  return (
    <div className='modal-product'>
        <p className='close' onClick={() => setModalProduct({product:{}, show: false})}>x</p>
        <p><strong>Nombre:</strong> {modalProduct.product.nombre}</p>
        <p><strong>Stock:</strong> {modalProduct.product.stock}</p>
        <p><strong>Precio:</strong> {modalProduct.product.precio}</p>
    </div>
  )
}

export default ModalProduct