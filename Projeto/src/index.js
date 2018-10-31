import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"; // componente browser router irá "abraçar toda a aplicação"
import Login from "./paginas/Login/Login";
import Conta from "./paginas/Conta/Conta";
import QuemSomos from "./paginas/QuemSomos/QuemSomos";
import Contato from "./paginas/Contato/Contato";
import "./index.css";

// componente com todas as páginas presentes na aplicação
// se não tem o exact, todo e qualquer path que tiver / vai sempre mostrar a tela de Login!! não esquecer!!
function App() { 
  return (
    <div className="app">
      {/*NavBar*/}
      <Switch>
        <Route path="/" exact component={Login}/> 
        <Route path="/login" component={Login}/>
        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos}/>
        <Route path="/contato" component={Contato}/>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById("projeto")
  );
// ReactDOM.render(<Login/>, divisaoProjeto);
