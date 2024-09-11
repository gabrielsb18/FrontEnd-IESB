import { useState } from "react";
import Input from "../../components/Input/input";
import Button from "../../components/Button/Button"
import "./Login.css"

export default function Login(){
    
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState("");
    
    const efetuarLogin = () => {
        // e.preventDefault();
        // props.navegaPara("/Home")
    }

    return (
        <div className="ContainerForm">
            <h1>Login</h1>
            <form onSubmit={efetuarLogin}>
                <Input
                    type={"email"} 
                    placeholder={"Email"}
                    valor={email}
                    setValor={setEmail}
                />

                <Input
                    type={"password"} 
                    placeholder={"Senha"}
                    valor={senha}
                    setValor={setSenha}
                />
                <Button type={"submit"} texto={"Entrar"}/>
            </form>
        </div>
    )
}