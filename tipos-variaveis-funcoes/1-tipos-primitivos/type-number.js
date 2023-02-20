/* Tipos numericos */

const idade = 31;
const pi = 3.14;

//Divisões por zero em javaScript retornam "Infinity"
var a = 10;
var b = 0;
console.log(a/b);

//Agora operações que não tem valor definido, retornam o a excessão : NaN (Not a Number)
a = 0;
b = 0;
console.log(a/b);