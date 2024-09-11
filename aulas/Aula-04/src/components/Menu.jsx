import Link from "../components/Link"

function Menu (){
    const opcoes  = ["Home","Perfil", "Sair"]

    return (
        <nav>
            {opcoes.map((opcao) => (
                <li key={opcoes}>
                    <Link texto = {opcao}/>
                </li>
            ))}
            <ul>
            </ul>
        </nav>
    )
}

export default Menu;