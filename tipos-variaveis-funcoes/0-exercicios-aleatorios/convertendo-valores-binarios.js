const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Digite um número binário (Representado apenas por 0 e 1): ', binario => {
    console.log(`O número digitado foi: ${binario}`);
    readline.close();

    let bigDecimal = BigInt(0);

    const arrayDigitosBinarios = binario.split("").reverse();
    console.log(arrayDigitosBinarios);

    for (let i = 0; i < arrayDigitosBinarios.length; i++) {
        bigDecimal += BigInt(arrayDigitosBinarios[i] * (2**i));
    }

    console.log(bigDecimal);
});


