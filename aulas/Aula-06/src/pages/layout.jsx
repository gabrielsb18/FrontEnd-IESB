import { NavLink, Outlet } from "react-router-dom";
import "../pages/Layout.css"

export default function Layout(){
    return (
        <>
            <header>
                <h1>Aluno Online</h1>
            </header>

            <main>
                <nav>
                    <ul>
                        <li><NavLink to = "/Home">Home</NavLink></li>
                        <li><NavLink to = "/Perfil">Perfil</NavLink></li>
                        <li><NavLink to = "/">sair</NavLink></li>
                    </ul>
                </nav>
            </main>

            <section>
                <Outlet/>
                <h2>Teste</h2>
            </section>
        </>
    )
}