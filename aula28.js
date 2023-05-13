function* perguntas(){
    const nome=yield 'Qual seu Nome?'
    const esportes=yield 'Qual seu esporte favorito?'
    return "Seu nome é " + nome + ', seu esportes favorito é ' + esportes
   
}

const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next('Evando').value)
console.log(itc.next('Futsal').value)