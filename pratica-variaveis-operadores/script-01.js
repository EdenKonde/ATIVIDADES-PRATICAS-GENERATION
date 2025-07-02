//Importação da função
import { questionFloat } from "readline-sync";

//Recebimento de dados pelo pronpt
let salario = questionFloat("Digite o Salario: ");
let abono = questionFloat("Digite o Abono: ");

// Cálculo do novo salário
let novoSalario = (salario + abono).toFixed(2);

//Saída
console.log(`Novo Salário: ${novoSalario}`);
