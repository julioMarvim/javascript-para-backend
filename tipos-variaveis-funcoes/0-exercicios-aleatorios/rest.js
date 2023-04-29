function montaReceita(nomeReceita, ...ingredientes){
    console.log(`Receita do dia - ${nomeReceita}`);
    ingredientes.forEach(item => console.log(item));
}

montaReceita('Limonada', '3 limões', '1 litro de água', '3 colheres de açucar');