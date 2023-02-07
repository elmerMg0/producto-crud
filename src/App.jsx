import React from 'react';
import {Routes,Route} from "react-router-dom"
import Producto from "./components/Producto"

 function App(){
    return (
            <Routes>
                <Route path="/" element={<Producto/>} />
                <Route path="producto" element={<Producto/>} />
                <Route path="/" element={<Producto/>} />
                <Route path="/" element={<Producto/>} />
           </Routes>
    )
}
export default App;