// <a class="link" href="/conta">Criar uma conta</a>

const linkCriarUmaConta = React.createElement("a", {
    className: "link", 
    href: "/conta", 
    children: "Criar uma conta"
});

//  <a class="link" href="/conta">Fazer login</a>

const linkFazerLogin = React.createElement("a", {
    className: "link", 
    href:"/login", 
    children: "Fazer login"
});

//div onde serão posicionadas as "children"

const formularioLogin = React.createElement("form",{
    children: [linkCriarUmaConta, linkFazerLogin]
});

const divisaoProjeto = document.getElementById("projeto"); // essa div faz parte da DOM REAL

//ReactDOM.render(elemento React, elemento do DOM real)
ReactDOM.render(formularioLogin, divisaoProjeto) // fala qual é o elemento react que voce quer colocar no dom real






