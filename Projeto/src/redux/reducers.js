import { combineReducers } from "redux";
// const action = {type: ... dados: {...}}
// const state = {  usuario: null }
//primeiro, define-se o estado inicial

let usuarioInicial = null;

const json = localStorage.getItem("usuario");
if ( json ) {
    usuarioInicial = JSON.parse(json);
};

//redutor recebe estado atual e retorna o novo estado apos modificacao
//podemos ter mais de um redutor

function usuario( state = usuarioInicial, action ) { // state nesse caso seria o usuario atual
    switch(action.type) {
        case "LOGA_USUARIO":
            const usuarioLogado = action.dados;
            const json = JSON.stringify(usuarioLogado);
            localStorage.setItem("usuario", json);
            return usuarioLogado; // retorna os dados para a Store quando a ação acontecer
        case "DESLOGA_USUARIO":
            localStorage.removeItem("usuario");
            const usuarioDeslogado = null;
            return usuarioDeslogado;
        default:
            return state;
    };
};

function postits( postitsAtuais = [], action ){
    switch(action.type) {
        default:
            return postitsAtuais
    }
};

const reducers = combineReducers({
    usuario: usuario,
    postits: postits
});

export default reducers;