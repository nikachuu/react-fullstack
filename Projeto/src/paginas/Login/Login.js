import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Login.css";

function Login(){
    return (
        <main className="login">
            <h1>Login</h1>
            <p>Entre com seu e-mail e senha.</p>
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo type="email" id="email" placeholder="Email"/>
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" id="senha" placeholder="Senha"/>
            <Botao desabilitado>Enviar</Botao>
            <Link url="">Criar uma conta</Link>
        </main>
    );
};

export default Login;