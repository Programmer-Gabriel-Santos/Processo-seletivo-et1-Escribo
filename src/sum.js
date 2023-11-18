
import readlineSync from 'readline-sync';

const sum = (num) => {
    let result = 0;
    let numbers = [];

    if (!num || isNaN(num)) {
        console.log('\n', '\x1b[31m', 'Por favor, informe um número válido.', '\n')
        return
    } else if (num < 0) {
        console.log('\n', '\x1b[31m', 'Por favor, informe um número positivo.', '\n')
        return
    } else if (!Number.isInteger(num)) {
        console.error('\n', '\x1b[31m', 'O número fornecido não é um inteiro.', '\n');
        return;
    }

    for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numbers.push(i);
            result += i;
        };
    }
    console.log('\n', 'Números divisíveis por 3 ou 5:', '\x1b[33m', numbers.toString(), '\n', '\n', '\x1b[32m', 'Resultado do cálculo:', result, '\n');
}

const startTest = () => {
    const response = readlineSync.question('Vamos iniciar o teste? Digite "s" para prosseguir, ou "n" para cancelar: ');

    if (response.toLowerCase() === 's') {
        const num = readlineSync.question('Digite um número positivo para realizar o cálculo: ');
        sum(num);
    } else {
        console.log('\n', '\x1b[33m', 'Teste cancelado.', '\n');
    }
}

startTest();
