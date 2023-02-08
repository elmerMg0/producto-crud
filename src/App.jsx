import React from 'react';
import {Routes,Route} from "react-router-dom"
import Producto from "./components/Producto"
import Home from './pages/Home'

 function App(){
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="home" element={<Producto/>} />
                <Route path="/update" element={<Producto/>} />
                <Route path="/productupdate" element={<Producto/>} />
           </Routes>
    )
}
export default App;