import { createStore, applyMiddleware, compose } from "redux"; //uma função especifica do redux
import thunk from "redux-thunk";
import reducers from "./reducers";

//espera receber quais sao os redutores 
//função cria a Store e a retorna
//reducers normalmente sao criados em outros arquivos

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;