import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import Menu from "../Menu/Menu";
import "./Navbar.css";

//navbar nao muda de estado, não precisa ser feita em classe
//não usa props, então a tag não tem nenhum atributo
//a tag passou a ter atributo a partir do momento que precisamos utilizar funcoes disponiveis em outros componentes para pegar dados e deslogar usuario no index
//essas funcoes sao chamadas incluindo props.usuario e props.deslogaUsuario

function Navbar(props) {

    return (
        <header className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="Logo" />
            </Link>

            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
        </header>
    );
};
export default Navbar;