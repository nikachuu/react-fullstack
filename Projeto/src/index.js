import React from "react";
import ReactDOM from "react-dom";
import { withRouter, BrowserRouter, Switch, Route, Redirect } from "react-router-dom"; // componente browser router irá "abraçar toda a aplicação"
import store from "./redux/store";
import { Provider, connect } from "react-redux"; // conectar componente criado com connect para acessar a store
import Navbar from "./componentes/Navbar/Navbar";
import Login from "./paginas/Login/Login";
import Conta from "./paginas/Conta/Conta";
import QuemSomos from "./paginas/QuemSomos/QuemSomos";
import Contato from "./paginas/Contato/Contato";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";
import Home from "./paginas/Home/Home";
import "./index.css";


// ** TRECHO DE CÓDIGO FOI COMENTADO POIS COM O REDUX, AS INFORMAÇÕES COMEÇAM A VIR DO STORE **

// // retorna o json guardado no localStorage, mas é preciso fazer uma conversao "inversa" de string pra objeto utilizando o JSON.parse
// let usuario = JSON.parse(localStorage.getItem("usuario"));

// function logaUsuario(dados) { 
//   // stringify transforma um objeto, que é uma variavel, em texto/string e guarda esse texto em uma variável
//   const json = JSON.stringify(dados);
//   //armazenar o usuario no localstorage ( que é uma memoria pequena do navegador ) permite que quando a tela for recarregada, você nao perca as informações de login
//   //a funcao setItem recebe dois parametros: nome pra referenciar o objeto/texto que vc vai guardar ',' texto que vc vai guardar
//   localStorage.setItem("usuario", json);
//   console.log("dados", dados);
//   usuario = dados;
// };

// function deslogaUsuario() {
//   localStorage.removeItem("usuario");
//   usuario = null;
// };
// componente com todas as páginas presentes na aplicação
// se não tem o exact, todo e qualquer path que tiver / vai sempre mostrar a tela de Login!! não esquecer!!
// render do router faz a verificação de login, ele espera receber dentro das chaves uma função de verificação
// a função fica dentro do proprio switch e o else consistira de uma tag propria da propriedade switch, chamada Redirect, seguida do to + url de redirecionamento
// a tag Redirect precisa ser importada no react-router-dom

// props como parametro em login torna possivel receber o histórico do navegador e acesssar informações que foram inseridas
// historico (props.history) armazena um array com as paginas disponiveis; o push adiciona mais uma url no historico e redireciona para a pagina que for especificada na função

function App(props) {

  const usuario = props.usuario;

  return (
    <div className="app">
      <Navbar/>

      <Switch>
        <Route path="/" exact render={() => {
          return usuario ? <Home/> : <Redirect to="/Login"/>
        }}/>
        <Route path="/login" component={Login}/>
        <Route path="/conta" component={Conta}/>
        <Route path="/quem-somos" component={QuemSomos}/>
        <Route path="/contato" component={Contato}/>
        <Route component={NaoEncontrada}/>
      </Switch>
    </div>
  );
};

//Recebe uma funcao que passa os dados do estado via props pro componente, 
// e um segundo parametro que é uma funcao que permite que o meu componente dispare ações via props
//AMBAS PRECISAM SER CRIADAS!

function passaDadosDoEstadoParaMeuComponente(state){
  //recebe estado e o coloca dentro do props do componente
  //retorna props que sera passado para o componente que dispara a ação
  const props = {
    usuario: state.usuario
  }
  return props;
};

function passamFuncoesQueDisparamAcoesViaProps(dispatch){
  const props = {
    logaUsuario: (dados) => {
      const acao = {
        type: "LOGA_USUARIO",
        dados: dados
      };
      dispatch(acao) // dispatch = dispara ação
    },

    deslogaUsuario: () => {
      const acao = {
        type: "DESLOGA_USUARIO",
        dados: null
      };
      dispatch(acao);
    }
  };

  return props;
};

const conectaNaStore = connect(
  passaDadosDoEstadoParaMeuComponente,
  passamFuncoesQueDisparamAcoesViaProps
);

const AppConectada = withRouter(conectaNaStore(App));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppConectada/>
    </BrowserRouter>
  </Provider>,
  document.getElementById("projeto")
  );