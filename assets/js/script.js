let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa")

nome.style.width = '100%';
email.style.width = '100%';
assunto.style.width = '100%';

function validaNome() {
    let txt = document.querySelector("#txtNome");
    if(nome.value.length < 2) {
        txt.innerHTML = "nome invalido";
        txt.style.color = "red";
    }else {
        txt.innerHTML = "nome valido";
        txt.style.color = "green";
        nomeOk = true;
    }
}

function validaEmail() {
    let txt = document.querySelector("#txtEmail");
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = "email invalido";
        txt.style.color = "red";
    }else {
        txt.innerHTML = "email valido";
        txt.style.color = "green";
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector("#txtAssunto");
    if(assunto.value.length > 100) {
        txt.innerHTML = "numero de caracteres excedidos";
        txt.style.color = "red";
        txt.style.display = "block";
    }else {
        txt.style.display = "none";
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("formulario enviado com sucesso!");
    }else {
        alert ("preencha o formulario corretamente antes de enviar...");
    }
}

function mapaZoom() {
    mapa.style.width = "800px";
    mapa.style.height = "600px";
}

function mapaNormal() {
    mapa.style.width = "400px";
    mapa.style.height = "250px";
}

