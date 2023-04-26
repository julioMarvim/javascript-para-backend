const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Digite um número binário (Representado apenas por 0 e 1): ', numero => {
    console.log(`O número digitado foi: ${numero}`);
    readline.close();

    let bigDecimal = BigInt(0);
    let binario = true;

    const digitos = numero.split("").reverse();
    console.log(digitos);

    digitos.forEach( digito => {
        if(digito > 1){
            binario = false;
        }
    })

    if(binario){
        for (let i = 0; i < digitos.length; i++) {
            bigDecimal += BigInt(digitos[i] * (2**i));
        }
    }else{
        let numeroBinario = "";
        while(numero > 0){
            numeroBinario += numero % 2;
        }

        bigDecimal = numeroBinario;
    }

    console.log(bigDecimal);
});


