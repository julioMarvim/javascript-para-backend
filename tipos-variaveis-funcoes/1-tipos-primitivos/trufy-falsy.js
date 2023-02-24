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

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);

console.log(typeof minhaVar);
console.log(typeof varNull);