// <a class="link" href="/conta">Criar uma conta</a>
const linkCriarUmaConta = document.createElement("a");
linkCriarUmaConta.className = "link" //objeto.propriedadeDoObjeto
linkCriarUmaConta.href = "/conta" 
linkCriarUmaConta.appendChild(document.createTextNode("Criar uma conta"));

//  <a class="link" href="/conta">Fazer login</a>
const linkFazerLogin = document.createElement("a");
linkFazerLogin.className = "link"
linkFazerLogin.href = "/login" 
linkFazerLogin.appendChild(document.createTextNode("Fazer login"));

//div onde serão posicionadas as "children"
const divisaoProjeto = document.getElementById("projeto");

const formularioLogin = document.createElement("form");
formularioLogin.appendChild(linkCriarUmaConta);
formularioLogin.appendChild(linkFazerLogin);

divisaoProjeto.appendChild(formularioLogin);




