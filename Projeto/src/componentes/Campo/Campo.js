import React, { Component } from "react";
import "./Campo.css";

/*
1) O componente pode mudar de estado? Sim // Class
2) Qual o estado inicial? state = { erro: '' } // constructor
3) O que muda? setState({ erro: '' }) ou  // setState({erro: 'Campo obrigatório'})
4) O que faz ele mudar?
// function onChange pra verificar se devo ou não mostrar uma mensagem de erro
if condição mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/

class Campo extends Component {
    constructor(props){
        super(props);
        this.valor = "";
        this.state = {
            modificado: false,
            erro: ""
        };
        // this.valida = this.valida.bind(this) quando a função valida for chamada, se ela usa a palavra this dentro dela, o this sempre será a classe Campo
    };

    // função responsavel por retornar os valores inseridos no campo  (que inicia com valor vazio)
    getValor = () => {
        return this.valor;
    };

    temErro = () => {
        return !this.state.modificado || this.state.erro ? true : false //se tem erro dentro do state retorna true, se não tiver retorna false
        // é o mesmo que if ( this.state.erro )' { return true } else { return false }
    };

    valida = (evento) => {
        const input = evento.target;
        //**DESTRUCTURING OBJECTS**:
        const { value, type } = input;
        const { required, minLength } = this.props;
        /* é o mesmo que const required = this.props.required
        const minLength = this.props.minLength
        const pattern = this.props.pattern */
        let mensagem = "";
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( required && value.trim() === "" ) {
            mensagem = "Campo obrigatório";
        } else if ( minLength && value.length < minLength ){
            mensagem = `Digite pelo menos ${minLength} caracteres.`;
        } else if ( type === "email" && !regex.test(value) ){
            mensagem = "Email inválido";
        };

        this.setState({ modificado: true, erro: mensagem }, this.props.onChange) // para não ter delay na atualização do onChange
        
        this.valor = value; // guardando o value na classe para poder usar depois na tela de login
    };

    render() { // chamar render do component: super.render()
        return (
            <div>
                <input 
                    id={this.props.id}
                    className="caixa-texto" 
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.valida}
                    onBlur={this.valida} //pra quando só clicar e sair do campo ele validar tambem
                />

                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        );
    };
};
/*
<input name ="email" type="email" id="email" placeholder="Email">
;
const props = {
    name: "email"
    type: "email"
    id: "email",
    placeholder: "Email"
}
*/
export default Campo;