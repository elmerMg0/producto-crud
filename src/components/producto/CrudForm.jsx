import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

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
    const [permission, setPermission] = useState(false)
    const permissions = useSelector(state => state.login.permissions)

    useEffect( ()=> {
        if(dataToEdit){
            setForm(dataToEdit);
        }
  
    },[dataToEdit])
    
    useEffect( () => {
        if(permissions){
            console.log(permissions)
            let flag = permissions.some(per => per.name === "createProducts")
            console.log(flag)
            setPermission(flag);
        }
    },[permissions])

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
    <form onSubmit={handleSubmit} className="form">
            <div className='form-inputs'>
                <div className='form-card'>
                    <label>Nombre</label>
                    <input required className='form-control' name='nombre' type="text" onChange={handleChange} value={form.nombre}/>
                </div>
                <div className='form-card'>
                    <label >Descripción</label>
                    <textarea className='form-control' name='descripcion' type="text" onChange={handleChange} value={form.descripcion}/>
                </div>
                <div className='form-card'>
                    <label >Precio</label>
                    <input required className='form-control' name='precio' type="number" onChange={handleChange} value={form.precio} />
                </div>
                <div className='form-card'>
                    <label >Stock</label>
                    <input required className='form-control' name='stock' type="number" onChange={handleChange} value={form.stock}/>
                </div>
                <div className='form-card'>
                    <label >marca_id</label>
                    <input required className='form-control' name='marca_id' type="number" onChange={handleChange} value={form.marca_id}/>
                </div>
                <div className='form-card'>
                    <label >seccion_id</label>
                    <input required className='form-control' name='seccion_id' type="number" onChange={handleChange} value={form.seccion_id}/>
                </div>

            </div>

            <div className='form-buttons'>
                <button className='button button--green'>Send</button>
                <button className='button button--red' onClick={handleReset} >Clear</button>
            </div>
        </form> 
  )
}

export default CrudForm