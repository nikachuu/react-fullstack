import React, { Component } from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Conta.css";


/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { desabilitado: true } // constructor
3) O que muda? setState({ desabilitado: false })
4) O que faz ele mudar?
// function onChange e a Referência criada para utilizar a função temErro() presente no componente Campo
**passos: criar Ref no constructor, colocar propriedades ref e onChange nas tags e, dentro da função chamar a ref.current
**também não esquecer de chamar a mudança de state no botão
se qualquer campo do form possuir um erro:
- botão desabilita
se não:
- botão habilitado
*/

class Conta extends Component {
    constructor(props){
        super(props);
        this.nomeRef = React.createRef();
        this.telRef = React.createRef();
        this.mailRef = React.createRef();
        this.passRef = React.createRef();
        this.state = {
            desabilitado: true
        };
    };

    handleChangeButton = () => {

        const campoNome = this.nomeRef.current;
        const campoTel = this.telRef.current;
        const campoEmail = this.mailRef.current;
        const campoPass = this.passRef.current;

        if ( campoNome.temErro() || campoTel.temErro() || campoEmail.temErro() || campoPass.temErro() ) {
            this.setState({ desabilitado: true });
        } else {
            this.setState({ desabilitado: false });
        };

    };

    render() {
        return (
        <main className="conta">
            <h1>Conta</h1>
            <p>Preencha o formulário para criar uma conta!</p>
            <Legenda htmlFor="text">Nome completo:</Legenda>
            <Campo
                ref={this.nomeRef}
                type="text"
                id="text"
                placeholder="Nome completo"
                required
                onChange={this.handleChangeButton}
            />
            <Legenda htmlFor="telefone">Telefone:</Legenda>
            <Campo
                ref={this.telRef}
                type="tel"
                id="telefone"
                placeholder="Telefone"
                required
                onChange={this.handleChangeButton}
            />
            <Legenda htmlFor="email">Email:</Legenda>
            <Campo
                ref={this.mailRef}
                type="email"
                id="email"
                placeholder="Email"
                required
                onChange={this.handleChangeButton}
            />
            <Legenda htmlFor="senha">Senha:</Legenda>
            <Campo
                ref={this.passRef}
                type="password"
                id="senha"
                placeholder="Senha"
                required
                minLength={6}
                onChange={this.handleChangeButton}
            />
            <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
            <Link url="">Fazer login</Link>
        </main>
        );
    };
};

export default Conta;