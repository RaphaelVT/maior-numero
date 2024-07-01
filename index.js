const prompt = require("prompt-sync")();

let num1 = prompt (`Digite um número: `);

function maior() {
    return parseInt(num1.toString().split('').sort((a,b) => b - a).join(''));
}

let maiornum = maior(num1)

console.log(`O maior número é: ${maiornum}`);