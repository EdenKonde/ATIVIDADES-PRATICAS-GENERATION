//Importação da função
import { questionInt } from "readline-sync";

//Recebimento de dados pelo pronpt
let num = questionInt("Digite um valor: ");

// Verificar se o número é par ou ímpar
let polaridade = num % 2 === 0 ? "par" : "ímpar";

//Verifica se o número é positivo ou negativo
let tipo;
if (num > 0) {
  tipo = "positivo";
} else if (num < 0) {
  tipo = "negativo";
} else {
  tipo = "zero";
}

// Exibição do resultado
console.log(`O número digitado é ${polaridade} e ${tipo}`);
