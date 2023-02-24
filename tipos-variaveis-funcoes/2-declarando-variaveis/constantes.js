//Como estes valores não irão mudar dentro do nosso codigo, podemos declarar como constantes.
const forma = 'retangulo';
const altura = 5;
const comprimento = 7;
//No caso da area precisa obrigatoriamente ser let. 
let area;

if(forma === 'retangulo'){
    area = altura * comprimento;
}else {
    area = (altura * comprimento)/ 2;
}

console.log(area);