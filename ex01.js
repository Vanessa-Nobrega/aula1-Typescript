"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Crie um programa que receba um número do usuário e exiba seus 2 sucessores e seus 2 antecessores. 
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numero = Number(prompt('Digite um número: '));
console.log("Sucessores = ".concat(numero + 1, ",").concat(numero + 2, "\n    \nAntecessores = ").concat(numero - 1, ",").concat(numero - 2));
