import React, { Component } from "react";
import { connect } from "react-redux";
import { cadastraPostit, alteraPostit, removePostit } from "../../redux/actions";
import "./Postit.css";

class Postit extends Component {
    constructor(props){
        super(props);
        this.state = { editando: false };
    };

    cadastraOuAlteraPostit = (evento) => {
        //pegar dados digitado nos campos do formulario e envia-los chamando a funcao 
        //dados serão chamados pelos nomes que foram dados aos inputs criados
        evento.preventDefault();
       
        const form = evento.target;

        const cadastrando = !this.props.id; 

        if ( cadastrando ) {
            const dados = {
                id: `716df87d-9e91-4592-8e77-fca48df03b31${Math.random(100)}`,
                titulo: form.titulo.value,
                texto: form.texto.value
            };

            this.props.cadastraPostit(dados); // criar função no actions do redux 
            //precisa de um redutor esperando a ação para colocar o postit dentro da lista
            form.reset(); // limpa todos os campos depois que dispara a ação!

        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value
            }

            this.props.alteraPostit(dados);
            this.setState({ editando: false });
        };
    };

    editaPostit = () => {
        this.setState({ editando: true });
    };

    removePostit = (evento) => {
        evento.stopPropagation();
        const id = this.props.id
        this.props.removePostit(id);
    };

    render(){
        const cadastrando = !this.props.id;

        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit} onClick={this.editaPostit}>
                { !cadastrando && this.state.editando && (
                <input 
                    className="postit__botao-remover" 
                    type="submit" 
                    value="Remover"
                    onClick={this.removePostit}
                />
                )}
                <input 
                    className="postit__titulo"
                    name="titulo"
                    type="text" 
                    placeholder="Digite um título" 
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                />

                <textarea 
                    className="postit__texto"
                    name="texto" 
                    placeholder="Digite um lembrete" 
                    rows={5} 
                    autoComplete="off"
                    defaultValue={this.props.texto}
                />
                {(cadastrando || this.state.editando) && (
                <input 
                    className="postit__botao-concluir"
                    type="submit" 
                    value="Concluido"
                />
                )}
            </form>
        )
    };
};


export default connect(
    null,
    { cadastraPostit, alteraPostit, removePostit }
)(Postit);

// const props = {
//     cadastraPostit: cadastraPostit,
//      alteraPostit: alteraPostit,
//      removePostit: removePostit
// }

// <Postit cadastraPostit={cadastraPostit} />

// connect: junta retorno das duas e coloca no Props (
    // { State: dados do estado e colocar dentro do props },
    // { Ação: ter acesso ao dispatch criar funcoes que usam o dispatch pra disparar a ação } 
// )(Nome do componente);}
