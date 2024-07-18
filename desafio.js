function jogarCraps() {
    let ponto = 0;
    let primeiraJogada = true;

    while (true) {
        let dado1 = Math.floor(Math.random() * 6) + 1
        let dado2 = Math.floor(Math.random() * 6) + 1
        let somaDados = dado1 + dado2;

        console.log(`\nVocê lançou: ${dado1} + ${dado2} = ${somaDados}`);

        if (primeiraJogada) {
            if (somaDados === 7 || somaDados === 11) {
                console.log(`Natural! Você ganhou.`);
                return;
            } else if (somaDados === 2 || somaDados === 3 || somaDados === 12) {
                console.log(`Craps! Você perdeu.`);
                return;
            } else {
                ponto = somaDados;
                console.log(`Ponto é ${ponto}`);
                primeiraJogada = false;
            }
            
        } else {
            if (somaDados === ponto) {
                console.log(`Você fez o Ponto! Você ganhou.`);
                return;
            } else if (somaDados === 7) {
                console.log(`Você tirou 7. Você perdeu.`);
                return;
            }
        }
    }
}

jogarCraps();
