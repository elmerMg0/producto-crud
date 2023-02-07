import { useEffect } from "react"
import {ApiServices} from '../services/api.services'

export default function Producto(){

    useEffect(()=>{
        ApiServices.getProductos()
    }, [] )

    return (
        <h1>Producto</h1>
    )
}