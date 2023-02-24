//conversao implicita:
const numero = 456;
const numeroString = "456";

console.log(typeof numero); //number
console.log(typeof numeroString);// string

console.log(numero === numeroString);//false number != string

/* Neste caso existe uma conversão implicita, neste caso o js pegou nosso 
numero converteu em uma string e comparou os dois valores, retornando true */
console.log(numero == numeroString); // true

/* Neste caso acontece a mesma coisa, o Js faz uma conversão implicita, transformando
 */
console.log(numero + numeroString); //456456

//conversão explícita
/* Neste caso, basicamente nos fazemos um cast dos valores, utilizando as funções
Number()
String()

*/


//IMPORTANTE: Se não forem numeros os valores da string convertida teremos o erro NaN
console.log(numero + Number(numeroString)); //912