let cpfUsuario  = "12345678910";

/*
Nesses casos o JavaScript não será capas de montar nossas variaveis
pois os nomes que ecolhemos para elas são palavras reservadas a linguagem.
*/
//let var = ""
//let if = 0;
//let const = "Alura";

//Neste caso podemos utilizar.
let varInicial = 0;
let ifFalse = 0;
let constTexto =  "Alura";


let from = "Julio";

console.log(from);


var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
    var respostaDeTudo = 3.14;
    let idade = 42;
    const pi = 29;
    console.log(respostaDeTudo, idade, pi);
}
console.log(respostaDeTudo, idade, pi);