import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "../../componentes/Link/Link";
import Botao from "../../componentes/Botao/Botao";
import Legenda from "../../componentes/Legenda/Legenda";
import Campo from "../../componentes/Campo/Campo";
import "./Login.css";

/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { desabilitado: true } // constructor
3) O que muda? setState({ desabilitado: false })
4) O que faz ele mudar?
// function onChange e a Referência criada para utilizar a função temErro() presente no componente Campo
if campoEmail tem erro ou campoSenha tem erro
- botão desabilita
- se não, botão habilitado
*/

class Login extends Component {

    constructor(props){ // constructor consiste dos dados necessários para construir o objeto
        super(props); // passa o props pra classe de cima
        this.emailRef = React.createRef(); // a referencia cria um objeto { current: null }
        this.senhaRef = React.createRef();
        this.state = {
            desabilitado: true
        };
    };

    handleChangeButton = () => {

        const campoEmail = this.emailRef.current; //pegando a referencia atual do email e da senha, sendo possivel chamar todas as funções disponiveis naquele campo, ou seja, a temERro()
        const campoSenha = this.senhaRef.current;

        if ( campoEmail.temErro() || campoSenha.temErro() ) {
            this.setState({ desabilitado : true });
        } else {
            this.setState({ desabilitado: false });
        };
    };

    enviarDados = (e) => {
        e.preventDefault();

        //através da referencia que foi feita anteriormente, é possível armazenar as informações que foram inseridas nos campos especificas chamando o current e a função que retorna o valor
        const dados = {
            email: this.emailRef.current.getValor(),
            senha: this.senhaRef.current.getValor()
        };

        this.props.logaUsuario(dados); // aqui mudou para logaUsuario pois a props que dispara a acao tem uma funcao com esse nome no index.js
        // formularios disparam evento onsubmit quando o botão é clicado. este, chamará a função enviarDados.
        // o enviarDados é um atributo que foi inserido no objeto props da tag Login (ou seja, é um atributo dela) e os dados serão enviados para ela através da função

        this.props.history.push("/");
    };

    render() {
        return (
            <main className="login">
                <h1>Login</h1>
                <p>Entre com seu e-mail e senha.</p>
                <form onSubmit={this.enviarDados}>
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
                </form>
            </main>
        );
    };
};

function passaAcoesNoProps(dispatch) {
    return {
        logaUsuario: (dados) => {
            const acao = {
                type: "LOGA_USUARIO",
                dados: dados
            }

            dispatch(acao);
        }
    };
};

const conectaNaStore = connect(null, passaAcoesNoProps);

const LoginConectado = conectaNaStore(Login);

export default LoginConectado;