import React, { Component } from "react";
import "./Postit.css";

class Postit extends Component {
    constructor(props){
        super(props);
        this.state = "";
    }

    render(){
        return (
            <form className="postit">
                <input className="postit__botao-remover" type="submit" value="Remover"/>
                <input className="postit__titulo" type="text" placeholder="Digite um título"/>
                <textarea className="postit__texto" placeholder="Digite um lembrete" />
                <input className="postit__botao-concluir" type="submit" value="Concluir"/>
            </form>
        )
    }
}

export default Postit;