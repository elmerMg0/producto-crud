import React, { useState } from 'react'
import {Button,Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'  

    const initialForm = {
        name: "",
        description: "",
        price: "",
        stock: "",
        marcaId: "",
        seccionId: "",
        id: ""
    }

const CrudForm = ( createProduct, updateProduct, dataToEdit, setDataToEdit) => {
    const [form, setForm] = useState(initialForm)

    const handleSubmit = (e) => {
        console.log("enviar")
        e.preventDefault();
        /* if(!form.name || !form.precio || !form.stock || !form.marcaId  || !form.seccionId){
            alert("Datos incompletos")
        } */
        if(form.id === null){
            createProduct(form);
        }else{
            updateProduct(form)
        }
        handleReset();
    }    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleReset = () => {
        setForm(initialForm);
        //setDataToEdit(null);
    }
  return (
    <form onSubmit={handleSubmit}>
            <ModalBody>
                <FormGroup>
                    <label>Nombre</label>
                    <input required className='form-control' name='name' type="text" onChange={handleChange} value={form.name}/>
                </FormGroup>
                <FormGroup>
                    <label >Descripción</label>
                    <textarea className='form-control' name='description' type="text" onChange={handleChange} value={form.description}/>
                </FormGroup>
                <FormGroup>
                    <label >Precio</label>
                    <input required className='form-control' name='price' type="number" onChange={handleChange} value={form.price} />
                </FormGroup>
                <FormGroup>
                    <label >Stock</label>
                    <input required className='form-control' name='stock' type="text" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <label >marca_id</label>
                    <input required className='form-control' name='marcaId' type="number" onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <label >seccion_id</label>
                    <input required className='form-control' name='seccionId' type="number" onChange={handleChange }/>
                </FormGroup>

            </ModalBody>

            <ModalFooter>
                <Button color='primary'>Insertar</Button>
                <Button onClick={handleReset} color='danger'>Limpiar</Button>
            </ModalFooter>
        </form> 
  )
}

export default CrudForm