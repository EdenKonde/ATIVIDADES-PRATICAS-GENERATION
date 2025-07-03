import { questionInt } from "readline-sync";

// Entrada de dados
let num1 = questionInt("Digite o primeiro numero (menor): ");
let num2 = questionInt("Digite o segundo numero (maior): ");

// Verifica  o intervalo
if (num1 >= num2) {
  console.log("Intervalo inválido!");
} else {
  console.log(`No Intervalo entre ${num1} e ${num2}:`);
}

// Processamento e saída
for (let i = num1; i <= num2; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é múltiplo de 3 e 5`);
  }
}
