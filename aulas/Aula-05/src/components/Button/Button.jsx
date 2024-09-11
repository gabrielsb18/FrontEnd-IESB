import "./Button.css"

/* eslint-disable react/prop-types */
export default function Button(props){
    return(
        <button type={props.type}>
            {props.texto}
        </button>
    )
}