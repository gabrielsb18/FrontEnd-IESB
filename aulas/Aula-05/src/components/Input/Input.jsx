/* eslint-disable react/prop-types */
import "./Input.css"

export default function Input(props) {
    return (
        <>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.valor}
                onChange={(e) => props.setValor(e.target.value)}
            />
        </>
    )
}