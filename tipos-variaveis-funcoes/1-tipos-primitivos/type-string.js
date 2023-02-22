/* Tipo string*/
const texto1 = "Olá mundo!";
const texto2 = 'Olá mundo!';
const senha = "senhaSegura12345";
const stringDeNumeros = "23456";

const citacao = ' O Julio disse "Oi!" ';
console.log(texto1 + citacao); 

/* Testando tranformações de codigo Unicode em caracteres especiais: */

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);


/* Algumas outras  formas comuns de se trabalhar com strings: */
const cidade = 'belo horizonte';
const input = 'Belo Horizonte';

// retorna false pq javaScript é uma linguagem case sensitiva
console.log(cidade === input); // false

//função que transforma todos os caracteres da string em letras minusculas.
const inputMinusculo  = input.toLowerCase();

// apartir de agora todos os caracteres são iguais. As strings são identicas.
console.log(cidade === inputMinusculo); // true
