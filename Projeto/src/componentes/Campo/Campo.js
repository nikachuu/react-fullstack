import React from "react";
import "./Campo.css";

/*
<input name ="email" type="email" id="email" placeholder="Email">

const props = {
    name: "email"
    type: "email"
    id: "email",
    placeholder: "Email"
}
*/

function Campo(props){
    return (
        <input 
        id={props.id}
        className="caixa-texto" 
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        />
    );
};

export default Campo;