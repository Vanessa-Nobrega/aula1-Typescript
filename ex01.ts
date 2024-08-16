//Crie um programa que receba um número do usuário e exiba seus 2 sucessores e seus 2 antecessores. 
import promptSync = require('prompt-sync')
var prompt = promptSync()

const numero : number = Number(prompt('Digite um número: '))
console.log(`Sucessores = ${numero+1},${numero+2}
    \nAntecessores = ${numero-1},${numero-2}`)
