import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erro404 from "./pages/Erro404";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Perfil";
import Layout from "./pages/layout";

function App() {
    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route element = {<Layout/>} >
                        <Route path = "/Home" element = {<Home/>} />
                        <Route path = "/Perfil" element = {<Perfil/>} />                   
                    </Route>
                    <Route index element = {<Login/>} />
                    <Route path = "*" element = {<Erro404/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
