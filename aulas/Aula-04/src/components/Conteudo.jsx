/* eslint-disable react/prop-types */
function Conteudo(props){
    return (
        <main className={props.estilo}>
            {props.children}
        </main>
    )
}

export default Conteudo;