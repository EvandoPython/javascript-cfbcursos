const caixa=document.querySelector("#caixa")


let cursos=['HTML','CSS','JS']

cursos.push('C++')//adicionando no array
cursos.push('Python')

cursos.pop() //retirar

console.log(cursos[0])

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})

console.log(cursos)