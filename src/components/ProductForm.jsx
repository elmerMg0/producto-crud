import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect} from 'react';
import {Button,Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'  


function ProductForm( { openModal, openModalEdit ,createProduct, updateProduct, service, product } ) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [marcaId, setMarcaId] = useState(0)
    const [seccionId, setSeccionId] = useState(0)
    const [description, setDescription] = useState("")

    useEffect( () => {
        loadInfoProduc();
    },[])

    function loadInfoProduc(){
        if(product){
            setName(product.nombre)
            setPrice(product.precio)
            setStock(product.precio)
            setDescription(product.descripcion)
            setMarcaId(product.marca_id)
            setSeccionId(product.seccion_id)
        }
    }
    function handleSubmit (){
        const product = {
            nombre: name,
            descripcion: description,
            precio : price,
            stock: stock,
            marca_id: marcaId,
            seccion_id: seccionId
        }
        if(service === "create"){
            createProduct(product, )
            openModal(false);
        }else{
            updateProduct(product)
            openModalEdit(false)
        } 
    }
            

    const closeModal = () =>{
        service === "create" ? openModal(false): openModalEdit(false);
    }
        
  return (
        <Modal isOpen={true}>
            <ModalHeader>
                <div>
                    <h3>Insertar nuevo producto</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <label>Nombre</label>
                    <input required className='form-control' id='name' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                </FormGroup>
                <FormGroup>
                    <label >Descripción</label>
                    <textarea className='form-control' type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                </FormGroup>
                <FormGroup>
                    <label required>Precio</label>
                    <input className='form-control' type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                </FormGroup>
                <FormGroup>
                    <label >Stock</label>
                    <input required className='form-control' type="text" onChange={(e)=>setStock(e.target.value)} value={stock}/>
                </FormGroup>
                <FormGroup>
                    <label >marca_id</label>
                    <input required className='form-control' type="number" onChange={(e)=>setMarcaId(e.target.value)} value={marcaId}/>
                </FormGroup>
                <FormGroup>
                    <label >seccion_id</label>
                    <input required className='form-control' type="number" onChange={(e)=>setSeccionId(e.target.value)} value={seccionId}/>
                </FormGroup>

            </ModalBody>

            <ModalFooter>
                <Button onClick={handleSubmit}>{service}</Button>
                <Button onClick={closeModal}>Cancelar</Button>
            </ModalFooter>
        </Modal> 
    )
}


export default ProductForm;