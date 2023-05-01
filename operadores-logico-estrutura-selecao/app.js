const readLine = require('redLine').createInteface({
    input: Process.stdin,
    output: process.stout
});

console.log('Esse programa e para saber se voce tem 18 anos e habilitacao para saber se voce pode entar no Kart');
console.log('Alem da sua verificacoes, precisamos verificar se voce esta na lista de presenca do horario');

readLine.question('Qual o ano do seu Nascimento', ano => {
    if(ano > 2004){
        console.log;('Voce nao tem 18 anos');
    }else{
        readLine.question("Voce te habilitacao ? (Sim/Nao)", temHabilitacao => {
            if(temHabilitacao.toUppercase() === "SIM") {
                console.log('Voce nao tem Habilitacao para entrar no Kart');
            }else{
                readLine.question("Qual seu nome ?", nome =>{
                    switch(nome){
                        case 'Kleysson' :
                            console.log ('Bem vindo ao Kart Kleysson');
                            break;
                        case 'Douglas' :
                            console.log('Bem vindo ao Kart Douglas');
                        default :
                        console.log('Seu nome nao foi identificado na Lista de Presença');
                    }
                })
            }
        })
    }
})
