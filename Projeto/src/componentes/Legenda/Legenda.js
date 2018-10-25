import React from "react";
import "./Legenda.css";

/* 
<Legenda className="legenda" htmlFor="email">Email:</Legenda>

const props = {
    htmlFor: "email",
    children: "Email"
}
*/

function Legenda(props){
    return (
        <label className="legenda" htmlFor={props.htmlFor}>
            {props.children}
        </label>
    );
};

export default Legenda