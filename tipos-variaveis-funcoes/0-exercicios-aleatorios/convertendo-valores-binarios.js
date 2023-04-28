const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Digite um número para ser convertido: ', numero => {
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
        console.log(`O número digitado é um binário, seu valor é: ${numero}`);
        for (let i = 0; i < digitos.length; i++) {
            bigDecimal += BigInt(digitos[i] * (2**i));
        }
    }else{
        console.log(`O número digitado é um decimal, seu valor é: ${numero}`);
        let numeroBinario = "";
        let numeroDecimal = numero;

        while(numeroDecimal > 0){
            numeroBinario = (numeroDecimal % 2) + numeroBinario;
            numeroDecimal = Math.floor(numeroDecimal / 2);
        }

        bigDecimal = numeroBinario;
    }

    console.log("Valor apos a conversão: ", bigDecimal);
});


