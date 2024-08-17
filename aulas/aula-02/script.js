const root = document.getElementById('root');


//COMPONENTES
function Cabecalho (){
    const header = document.createElement('header');
    return header;
}

function Principal (){
    const main = document.createElement('main');
    return main;
}

function Rodape (){
    const footer = document.createElement("footer");
    return footer;
}

function Botao (nome){
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("value", nome);
    return button;
}

function Formlogin (){
    const button = Botao("Entrar")
    const form = document.createElement("form");
    form.setAttribute("action", "")
    form.setAttribute("method", "post")
    form.append(button);
    return form; 
}

//PAGES
function Perfil (){
    root.append(Cabecalho());
    root.append(Principal());
}

function Home (){
    root.append(Cabecalho());
    root.append(Principal());
}

function Login (){
    const main = Principal();
    main.append(Formlogin());
    root.append(main);
    root.append(Rodape());
}

Login();