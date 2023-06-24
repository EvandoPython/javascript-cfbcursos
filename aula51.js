const valores = [10,9,2,8,15,4,7,0]
const it_valores=valores[Symbol.iterator]()


console.log(valores);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
console.log(it_valores.next().value);
