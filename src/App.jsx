import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home'
import Login from './pages/Login'

 function App(){
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/producto" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
           </Routes>
    )
}
export default App;