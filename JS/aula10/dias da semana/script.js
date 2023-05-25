let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")
let dia = document.getElementById("dia")

function Aperte()
{
    switch(numero.value)
    {
      case "1":
          resposta.innerHTML = ("Você escolheu, Domingo");
          dia.innerHTML = ("Final de Semana") 
          break;
      case "2":
          resposta.innerHTML = ("Você escolheu, Segunda-feira");
          dia.innerHTML = ("Dia Útil")  
          break;
      case "3":
          resposta.innerHTML = ("Você escolheu, Terça-feira"); 
          dia.innerHTML = ("Dia Útil")  
          break;
      case "4":
          resposta.innerHTML = ("Você escolheu, Quarta-feira"); 
          dia.innerHTML = ("Dia Útil")  
          break;
      case "5":
          resposta.innerHTML = ("Você escolheu, Quinta-feira"); 
          dia.innerHTML = ("Dia Útil")  
          break;
      case "6":
          resposta.innerHTML = ("Você escolheu, Sexta-feira");
          dia.innerHTML = ("Dia Útil")  
          break;
      case "7":
          resposta.innerHTML = ("Você escolheu, Sábado"); 
          dia.innerHTML = ("Final de Semana") 
          break;

      default:
          resposta.innerHTML = ("Inválido");
          dia.innerHTML = ("")
          break;
    }
}
