import { createStore } from "redux"; //uma função especifica do redux
import reducers from "./reducers";

//espera receber quais sao os redutores 
//função cria a Store e a retorna
//reducers normalmente sao criados em outros arquivos


const store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;