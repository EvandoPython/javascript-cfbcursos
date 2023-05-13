const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

const novoElemento=document.createElement("div")

caixa1.appendChild(novoElemento)
novoElemento.setAttribute("id","c7")
novoElemento.setAttribute("class","curso c1")
novoElemento.innerHTML="React"



//console.log(caixa1.children)


