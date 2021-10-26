class Animal{
    constructor(f){
        this.familia =f;
    }
    andar = () =>{
        return 'andando...';
    }
}

class Cachorro extends Animal {
    constructor(n, i){
        super('Carnívoros')
        this.nome = n
        this.idade = i
    }

    latir = () =>{
        return `${this.nome}: au! au!`;
    }
}

//let dunga = new Cachorro('Dunga', 12);

//console.log(dunga);
//console.log(dunga.latir());

let rex = new Cachorro('Rex', 1)
console.log(rex);
console.log(rex.latir());
console.log(rex.andar());
console.log(rex.familia);


