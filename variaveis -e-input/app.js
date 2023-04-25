const readLine = require('readLine').createInterface({
    input: process.stdin,
    output: process.stdout 
});

const minhaPrimeiraConstanteString = 'Minha primeira Constante';

let leituraDeCampo;
readLine.question('Informe sua Idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituradecampo}`);
});