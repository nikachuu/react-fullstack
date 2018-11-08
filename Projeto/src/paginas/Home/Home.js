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
        </div>
        )}      
    </main>
  )
};
}

export default connect((state) => ({ usuario: state.usuario }))(Home);