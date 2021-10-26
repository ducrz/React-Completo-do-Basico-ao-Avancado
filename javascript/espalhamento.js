const numeros = [1,2,3,4]

const novosNumeros = [...numeros, 5];
novosNumeros.push(5);

numeros.push(6);

console.log(numeros);
console.log(novosNumeros);

const rex = {
    nome:'Rex'
}

//Spread
const max = {...rex, idade: 2, familia:'Carnívoro'} ;


console.log(rex);
console.log(max);


//Rest
const somar = (...numeros) =>numeros.reduce((a,b) => a +b, 0);


console.log(somar(2,3, 4, 5, 6 , 7 ,8, 23))