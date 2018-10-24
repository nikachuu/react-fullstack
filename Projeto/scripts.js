function Link(props){
    return (
        <a className="link" href={props.url}>
            {props.children}
        </a>
    );
};

function Botao(props){
    let classes = "botao";

    if (props.desabilitado){
        classes += " botao--desabilitado";
    };

    return (
        <input className={classes} type="submit" value={props.children} />
    );
};

const paginaLogin = (
    <main className="pagina-login">
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>
        <Link url="/conta">Criar uma conta</Link>
        <Link url="/login">Fazer login</Link>
        <Botao desabilitado>Enviar</Botao>
        <Botao>Enviar</Botao>
    </main>
);

const props = {url: "/conta", children: "Criar uma conta"}
const divisaoProjeto = document.getElementById("projeto");
ReactDOM.render(paginaLogin, divisaoProjeto)

// const linkCriarUmaConta = <a class="link" href="/conta">Criar uma conta</a>;
// const linkFazerLogin = <a class="link" href="/conta">Fazer login</a>;

// const formularioLogin = (
//     <form>
//         {[linkCriarUmaConta, linkFazerLogin]}
//     </form>
// );

// const divisaoProjeto = document.getElementById("projeto");

// ReactDOM.render(formularioLogin, divisaoProjeto)






