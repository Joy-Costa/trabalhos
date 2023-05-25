let itens = document.getElementById("itens")
function minhafuncao()
{
//criar um elemento li
let li = document.createElement("li");
//criar um texto
let texto = document.createTextNode(itens.value);
//adicionar um texto no elemento
li.appendChild(texto)
//adicionar o li na minhalista
document.getElementById("minhalista").appendChild(li)

}
