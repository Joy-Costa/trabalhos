var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var P3 = document.getElementById("P3");
var P4 = document.getElementById("P4");
var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById ("resultado2")
var soma;
var dividir;

function SOMA()
{
     soma = parseInt (P1.value) + parseInt (P2.value) + parseInt (P3.value) + parseInt (P4.value);
     resultado.innerHTML = soma;
}

function DIVISÃO()
{
    dividir= parseInt (P1.value) / parseInt (P2.value)  
    resultado2.innerHTML = dividir;
}