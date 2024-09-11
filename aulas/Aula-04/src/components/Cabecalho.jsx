import InputPesquisa from "./InputPesquisa";
import Logo from "./Logo";
import Titulo from "./Titulo";

function Cabecalho(){
    return(
        <header>
            <Logo imagem = "" texto="logo da aplicação"/>
            <Titulo texto = "Aluno online" />
            <InputPesquisa/>
            <Logo imagem = "" texto="Incone Pesquisa"/>
        </header>
    )
}

export default Cabecalho;