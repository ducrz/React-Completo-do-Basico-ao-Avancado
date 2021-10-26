const frutas = ['laranja', 'banana', 'uva'];

let [fruta1, fruta3] = frutas;

//console.log(fruta1);
//console.log(fruta3);


const pessoa ={
    nome: 'Eduardo',
    idade: 32,
    pais: 'Brasil',
    idioma:'Português'
}

let {idade, idioma } = pessoa;

console.log(idade);
console.log(idioma);


const localidade = ({pais, idioma}) => `Você mora no ${pessoa.pais} e fala ${pessoa.idioma}`

console.log(localidade(pessoa));