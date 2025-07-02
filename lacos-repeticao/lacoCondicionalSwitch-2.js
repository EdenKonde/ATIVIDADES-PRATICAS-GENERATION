//Importação da função
import { questionInt, question, questionFloat } from "readline-sync";

// Exibe a tabela de cargos
console.log("===== TABELA DE CARGOS =====");
console.log("Código | Cargo         | Reajuste");
console.log("  1    | Gerente       | 10%");
console.log("  2    | Vendedor      | 7%");
console.log("  3    | Supervisor    | 9%");
console.log("  4    | Motorista     | 6%");
console.log("  5    | Estoquista    | 5%");
console.log("  6    | Técnico de TI | 8%");
console.log("==============================\n");

//Recebimento de dados pelo pronpt
const nome = question("Digite o nome do colaborador: ");
const codigoCargo = questionInt("Digite o codigo do cargo (1 a 6): ");
const salario = questionFloat("Digite o salario atual (R$): ");

let cargo;
let percentualReajuste;

switch (codigoCargo) {
  case 1:
    cargo = "Gerente";
    percentualReajuste = 0.1;
    break;
  case 2:
    cargo = "Vendedor";
    percentualReajuste = 0.07;
    break;
  case 3:
    cargo = "Supervisor";
    percentualReajuste = 0.09;
    break;
  case 4:
    cargo = "Motorista";
    percentualReajuste = 0.06;
    break;
  case 5:
    cargo = "Estoquista";
    percentualReajuste = 0.05;
    break;
  case 6:
    cargo = "Técnico de TI";
    percentualReajuste = 0.08;
    break;
  default:
    console.log("Código de cargo inválido.");
}

// Calcula o novo salário
const novoSalario = salario + salario * percentualReajuste;

// Exibição do resultado
console.log(`\nColaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
