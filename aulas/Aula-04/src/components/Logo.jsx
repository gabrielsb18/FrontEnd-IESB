// eslint-disable-next-line react/prop-types
function Logo({imagem, texto}){
    return(
        <>
            <img  style={{width: "60%"}} src ={imagem} alt = {texto}/>
        </>
    )
}

export default Logo;