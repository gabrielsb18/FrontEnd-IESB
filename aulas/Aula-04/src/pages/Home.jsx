import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/conteudo";
import Menu from "../components/Menu";
import Painel from "../components/Painel";
import Secao from "../components/Secao";

function Home(){
    const avisos = ["Aviso 1", "Aviso 2", "Aviso 3"]

    return (
        <>
            <Cabecalho />
            <Conteudo>
                <Menu/>
                <Secao texto = "Pagina inicial">
                    <Painel texto="Painel de avisos" itens= {avisos}/>
                    <Painel texto="Painel de avisos" itens={[]}/>
                    <Painel texto="Painel de avisos" itens={[]}/>
                    <Painel texto="Painel de avisos" itens={[]}/>
                </Secao>
            </Conteudo>
        </>
    )
}

export default Home;