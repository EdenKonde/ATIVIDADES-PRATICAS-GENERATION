import { questionInt } from "readline-sync";

let numero;
let somaNumPositivo = 0;

do {
  numero = questionInt("Digite um numero (0 para sair): ");
  if (numero > 0) {
    somaNumPositivo += numero;
  }
} while (numero !== 0);

//Saída
console.log(`A soma dos números positivos é: ${somaNumPositivo}`);
