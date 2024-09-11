import Logo from "../../components/Logo";
import BotaoSubmit from "../../components/BotaoSubmit"
import InputSenha from "../../components/InputSenha"
import InputUsuario from "../../components/InputUsuario"
import Titulo from "../../components/Titulo"
import Rodape from "../../components/Rodape"
import Link from "../../components/Link";
import Conteudo from "../../components/conteudo";
import "./Login.css"

function Login() {
    const urlLogo = "../../public/Logo.png"

    const textLogo = "Logo da aplicação"

    return (
        <>
            <Conteudo estilo="login-form">
                <Logo imagem={urlLogo} texto={textLogo} />
                <Titulo texto="Aluno online" />
                <InputUsuario />
                <InputSenha />
                <BotaoSubmit texto="Entrar" />
                <Link texto="Esqueceu sua senha" />
                <Link texto="Criar uma conta" />
            </Conteudo>
            <Rodape />
        </>
    )
};

export default Login;