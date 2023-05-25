var N1 = document.getElementById ("n1")
var N2 = document.getElementById ("n2")
var calculo = document.getElementById ("calculo")
var resposta = document.getElementById ("resposta")

function Aperte(){
    switch(calculo.value){
        case "1":
        resposta.innerHTML = parseInt (N1.value) + parseInt (N2.value)
        break

        case "2":
        resposta.innerHTML = parseInt (N1.value) - parseInt (N2.value)
        break

        case "3":
        resposta.innerHTML = parseInt (N1.value) * parseInt (N2.value)
        break

        case "4":
        resposta.innerHTML = parseInt (N1.value) / parseInt (N2.value)
        break

        default:
        resposta.innerHTML = ("Inexistente")
        break
        
    }
}