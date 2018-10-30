import React from 'react'
import "./Botao.css"

function Botao(props) {
    let classes = "botao";
    if (props.desabilitado) {
        classes += " botao--desabilitado";
    };
    return (
    <input className={classes} type="submit" value={props.children} disabled={props.desabilitado}/>
    );
};

export default Botao;