import React from "react";
import "./Campo.css";

class Campo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            erro: ""
        }

        // this.valida = this.valida.bind(this) quando a função valida for chamada, se ela usa a palavra this dentro dela, o this sempre será a classe Campo
    }

    valida = (evento) => {
        const alvo = evento.target;

        if ( this.props.obrigatorio && alvo.value.trim() === "" ) {
            const state = {
                erro: "Campo obrigatório"
            }
            this.setState(state)  // função que irá atualizar o state da classe nessas condições especificadas
        }
    }

    render() {
        return (
            <div>
                <input 
                    id={this.props.id}
                    className="caixa-texto" 
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    onChange={this.valida}
                />

                <p className="grupo__erro">{this.state.erro}</p>
            </div>
        )
    }
}
/*
<input name ="email" type="email" id="email" placeholder="Email">

const props = {
    name: "email"
    type: "email"
    id: "email",
    placeholder: "Email"
}
*/
export default Campo;