import React, { Component } from "react";
import { NavLink } from "react-router-dom"; // componente que serve para troca a rota da página e permite também dizer qual o CSS ativboimport "./Menu.css";
import "./Menu.css";
// O componente muda de estado? Sim: Classe
// O que muda?: state = {aberto: true} ou state = {aberto:false}
//Qual o estado inicial? aberto: false
// O que faz ele mudar?: evento de click

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aberto: false
        };
    };

    //arrow function serve pra nao ter que fazer o bind do this no construtor
    //teria que fazer this.abreOuFechaMenu = this.abreOuFechaMenu.bind(this)
    // o bind faz uma copia da funcao e fala pro this referenciar a classe menu dentro da função convencional

    abreOuFechaMenu = () => {
        if ( this.state.aberto ) {
            this.setState({ aberto: false })
        } else {
            this.setState({ aberto: true })
        };
    };

    //navlink ja faz o preventDefault

    sair = () => {
        this.abreOuFechaMenu();  
        this.props.deslogaUsuario();  
    };

    render() {

        let classesDoBotao = "navbar-menu__botao";
        let classesDasOpcoes = "navbar-menu__opcoes";

        if (this.state.aberto) {
            //classesDoBotao = "navbar-menu__botao navbar-menu__botao--aberto"
            // e classesDasOpcoes = "navbar-menu__opcoes navbar-menu__opcoes--aberto"
            classesDoBotao += " navbar-menu__botao--aberto";
            classesDasOpcoes += " navbar-menu__opcoes--aberto";
        };

        return (
            <nav className="navbar-menu">
                <a className={classesDoBotao} onClick={this.abreOuFechaMenu}>
                    Menu
                </a>

                <ul className={classesDasOpcoes}>
                    <li>
                        <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                            Quem somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                            Contato
                        </NavLink>
                    </li>
                    {this.props.usuario ? (
                        <li>
                            <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.sair}>
                                Sair
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.abreOuFechaMenu}>
                                Login
                            </NavLink>
                        </li>)
                    }
                </ul>
            </nav>
        );
    }
};

export default Menu;