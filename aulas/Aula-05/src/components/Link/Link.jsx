/* eslint-disable react/prop-types */
export default function Link(props){
    const aoClicar = (e) => {
        e.preventDefault()
        props.navegaPara(e.target.getAttribute("href"))
    } 

    return(
        <>
            <a href={props.rota} onClick={aoClicar}>{props.texto}</a>
        </>
    )
}