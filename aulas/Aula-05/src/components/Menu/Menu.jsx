/* eslint-disable react/prop-types */
import Link from " ../component/Link/Link"

export default function Menu(props){
    const opcoes = [
        {texto: "home", rota: "/home"},
        {texto: "perfil", rota: "/perfil"},
        {texto: "sair", rota: "/sair"}
    ]

    return(
        <nav>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key = {index}>
                        <Link navegaPara={props.navegaPara} rota={opcao.rota}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}