
const filtroMaior18=(valor)=>{
    if(valor>=18)
    return valor
}

const filtroMenor18=(valor)=>{
    if(valor<18)
    return valor
}
const idades=[15,21,30,17,18,44,12,50]
const maior=idades.filter(filtroMaior18)
const menor=idades.filter(filtroMenor18)


console.log(idades)
console.log(maior)
console.log(menor)