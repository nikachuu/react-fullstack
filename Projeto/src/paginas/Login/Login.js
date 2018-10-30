import React, { Component } from "react";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Login.css";

/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { desabilitado: true } // constructor
3) O que muda? setState({ erro: '' }) ou  // setState({erro: 'Campo obrigatório'})
4) O que faz ele mudar?
// function onChange pra verificar se devo ou não mostrar uma mensagem de erro
if condição mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/

class Login extends Component {

    constructor(props){
        super(props); // passa o props pra classe de cima
        this.emailRef = React.createRef();
        this.senhaRef = React.createRef(); 
        this.state = {
            desabilitado: true
        };
    };

    handleChangeButton = () => {

        const campoEmail = this.emailRef.current; //pegando a referencia atual do email e da senha, sendo possivel chamar todas as funções disponiveis naquele campo, ou seja, a temERro()
        const campoSenha = this.senhaRef.current;

        console.log("campoEmail", campoEmail)

        if ( campoEmail.temErro() || campoSenha.temErro() ) {
            this.setState({ desabilitado : true })
        } else {
            this.setState({ desabilitado: false })
        }
    }

    render() {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu e-mail e senha.</p>
                <Legenda htmlFor="email">Email:</Legenda>
                <Campo
                    ref={this.emailRef}
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    onChange={this.handleChangeButton}
                />

                <Legenda htmlFor="senha">Senha:</Legenda>
                <Campo
                    ref={this.senhaRef}
                    type="password"
                    id="senha"
                    placeholder="Senha"
                    required
                    minLength={6}
                    onChange={this.handleChangeButton}
                />

                <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
                <Link url="">Criar uma conta</Link>
            </main>
        );
    };
};

export default Login;