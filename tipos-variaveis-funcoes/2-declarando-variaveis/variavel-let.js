//O Codigo está quebrado pq a mesma logica do 'var' não se aplica para 'let'

let forma = 'retangulo';
let altura = 5;
let comprimento = 7;
//No caso de let precisamos declarar antes de utilizar. 
let area;

if(forma === 'retangulo'){
    area = altura * comprimento;
}else {
    area = (altura * comprimento)/ 2;
}

console.log(area);
//let area;