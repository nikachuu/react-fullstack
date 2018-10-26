import React from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Conta.css";

function Conta(){
    return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Preencha o formulário para criar uma conta!</p>
            <Legenda htmlFor="text">Nome completo:</Legenda>
            <Campo type="text" id="text" placeholder="Nome completo"/>
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo type="tel" id="telefone" placeholder="Telefone"/>
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo type="email" id="email" placeholder="Email"/>
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo type="password" id="senha" placeholder="Senha"/>
            <Botao>Enviar</Botao>
            <Link url="">Fazer login</Link>
        </main>
    );
};

export default Conta;