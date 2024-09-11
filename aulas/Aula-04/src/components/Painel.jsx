/* eslint-disable react/prop-types */
function Painel(props){
    return(
        <article>
            <h3>{props.texto}</h3>
            {props.itens.map((item, index) => (
                <li key={index}>
                    {item}
                </li>
            ))}
        </article>
    )
}

export default Painel;