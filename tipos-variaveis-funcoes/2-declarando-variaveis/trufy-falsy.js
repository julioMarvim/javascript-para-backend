//booleans
const contaPaga = false;
const usuarioLogado = true;

/* Alguns dados em Js podem não ser exatamente booleanos, mas podem ser tratados como booleanos
seriam os valores trufy ou falsy
 exemplo:

 0 => false
 1 => true

*/
console.log(0 == false);
console.log("" == false);// string vazia é false
console.log(1 == true);

let minhaVar;
let varNull = null;

console.log(minhaVar);// retorna undefined
console.log(varNull); // retorna null

let numero = 3;
let texto = "Alura";

console.log(typeof numero); //tipo number
console.log(typeof texto); // tipo string

console.log(typeof minhaVar); // undefined

/* Uma particularidade de javaScript é que o tipo null é tido como um objeto
isso acontece pq definiram assim desde o início, precisamos ter cuidado 
caso precisemos fazer validações de tipos em Js. */
console.log(typeof varNull); // objetc