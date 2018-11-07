import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Home.css"

function Home(props) {
  if ( !props.usuario ) {
    return <Redirect to="/Login"/>
  };

  return (
    <main className="home">

    </main>
  );
};

//precisa de dados do estado? SIM : fazer funcao que pega dados do estado
function passaDadosDoEstadoNoProps(state) {
  return {
    usuario: state.usuario
  };
};

//nao precisa ainda da funcao de passar as ações no props, pois a tela nao possui postits

const conectaNaStore = connect(passaDadosDoEstadoNoProps);
const HomeConectado = conectaNaStore(Home);

export default HomeConectado;