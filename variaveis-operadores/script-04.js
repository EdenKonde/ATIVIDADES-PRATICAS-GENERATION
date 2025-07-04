//Importação da função
import { questionFloat } from "readline-sync";

//Recebimento de dados pelo pronpt
let n1 = questionFloat("Digite o primeiro numero: ");
let n2 = questionFloat("Digite o segundo numero: ");
let n3 = questionFloat("Digite o terceiro numero: ");
let n4 = questionFloat("Digite o quatro numero: ");

// Cálculo da diferença entre os produtos
let diferencaProduto = (n1 * n2 - n3 * n4).toFixed(2);

//Saída
console.log(`A direferença do produto é: ${diferencaProduto}`);
