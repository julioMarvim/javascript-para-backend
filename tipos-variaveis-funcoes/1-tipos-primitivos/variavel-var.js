var altura = 5;
var comprimento = 7;

//Em javaScript podemos utilizar uma variavel mesmo antes dela ser declarada.
area = altura * comprimento;
console.log(area);

/* Podemos ver que funciona, se declaramos uma variável depois de atribuir valor pra ela.
O que acontece é  que o node lê todo o arquivo .js atribui todos os valores para as variaveis do tipo 
'var' e so então executa o programa. */
var area;