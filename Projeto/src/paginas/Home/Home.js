import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Postit from "../../componentes/Postit/Postit"
import carregando from "./loading.svg";
import "./Home.css";

class Home extends Component {
  constructor(props){
    super(props)
    this.state = { 
      carregando: false
    };
  };

render() {
  if ( !this.props.usuario ) {
    return <Redirect to="/Login"/>
  };

  return (
    <main className="home">
      { this.state.carregando ? (
        <img className="home__load" src={carregando} alt="Carregando" /> 
      ) : ( 
        <div>
          <Postit />

          <div>
            {this.props.postits.map(postit => (
              <Postit 
                key={postit.id}
                id={postit.id}
                titulo={postit.titulo} 
                texto={postit.texto}/>
            ))}
          </div>
        </div>
        )}      
    </main>
  )
};
}

export default connect((state) => ({ usuario: state.usuario, postits: state.postits }))(Home);

//this.props.postits: é uma array de objetos, para renderizar na tela precisa ser criada um array de tags dentro do render (MAP)
// <Home usuario={state.usuario} postits={state.postits} />