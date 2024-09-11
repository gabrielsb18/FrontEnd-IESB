import BotaoSubmit from "../components/BotaoSubmit";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/conteudo";
import InputSenha from "../components/InputSenha";
import InputUsuario from "../components/InputUsuario";
import Menu from "../components/Menu";
import Secao from "../components/Secao";

function Perfil(){
    return (
        <>
            <Cabecalho/>
            <Conteudo>
                <Menu/>
                <Secao texto ="Perfil do Usuario">
                    <InputUsuario texto = "Nome"/>
                    <InputSenha texto = "Senha"/>
                    <BotaoSubmit texto = "Salvar"/>
                </Secao>
            </Conteudo>
        </>
    )
}

export default Perfil;