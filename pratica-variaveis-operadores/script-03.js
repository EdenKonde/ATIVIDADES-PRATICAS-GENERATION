//Importação da função
import { questionFloat } from "readline-sync";

//Recebimento de dados pelo pronpt

let salarioBruto = questionFloat("Digite o Salario Bruto: ");
let adicionalNoturno = questionFloat("Digite o Adicional Noturno: ");
let horaExtra = questionFloat("Digite a hora extra: ");
let descontos = questionFloat("Digite o descontos: ");

// Cálculo do salário líquido
let salarioLiquido = (
  salarioBruto +
  adicionalNoturno +
  horaExtra * 5 -
  descontos
).toFixed(2);

//Saída
console.log(`O salário líquido é: ${salarioLiquido}`);
