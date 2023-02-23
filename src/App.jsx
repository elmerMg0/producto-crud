import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home'
import Login from './pages/Login'
import {ValidationSchemaExample} from "./components/LoginFormik"
 function App(){
    return (
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/producto" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/loginFormik" element={<ValidationSchemaExample/>} />
           </Routes>
    )
}
export default App;