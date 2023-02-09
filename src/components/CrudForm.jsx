import React, { useEffect, useState } from 'react'
import {Button,Modal, ModalBody, ModalHeader, FormGroup, ModalFooter} from 'reactstrap'  

    const initialForm = {
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        marca_id: "",
        seccion_id: "",
    }

const CrudForm = ( {createProduct, updateProduct, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect( ()=> {
        if(dataToEdit){
            setForm(dataToEdit);
        }
    },[dataToEdit])
    

    const handleSubmit = (e) => {
        console.log("enviar")
        e.preventDefault();
        /* if(!form.name || !form.precio || !form.stock || !form.marcaId  || !form.seccionId){
            alert("Datos incompletos")
        } */
        if(!form.id){
            createProduct(form);
        }else{
            updateProduct(form, form.id)
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
        setDataToEdit(null);
    }
  return (
    <form onSubmit={handleSubmit}>
            <ModalBody>
                <FormGroup>
                    <label>Nombre</label>
                    <input required className='form-control' name='nombre' type="text" onChange={handleChange} value={form.nombre}/>
                </FormGroup>
                <FormGroup>
                    <label >Descripción</label>
                    <textarea className='form-control' name='descripcion' type="text" onChange={handleChange} value={form.descripcion}/>
                </FormGroup>
                <FormGroup>
                    <label >Precio</label>
                    <input required className='form-control' name='precio' type="number" onChange={handleChange} value={form.precio} />
                </FormGroup>
                <FormGroup>
                    <label >Stock</label>
                    <input required className='form-control' name='stock' type="text" onChange={handleChange} value={form.stock}/>
                </FormGroup>
                <FormGroup>
                    <label >marca_id</label>
                    <input required className='form-control' name='marca_id' type="number" onChange={handleChange} value={form.marca_id}/>
                </FormGroup>
                <FormGroup>
                    <label >seccion_id</label>
                    <input required className='form-control' name='seccion_id' type="number" onChange={handleChange} value={form.seccion_id}/>
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