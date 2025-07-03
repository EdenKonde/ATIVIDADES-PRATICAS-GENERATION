import { question } from "readline-sync";

// Iniciando um array de cores vazio
const listaCores: string[] = [];

// Laço de repetição para entrada de dados
for (let i = 0; i < 5; i++) {
  listaCores.push(question(`Digite a ${i + 1}ª cor: `));
}

//Laço de repetição para saída de todas as cores
console.log("\nListar todas as cores:");
listaCores.forEach((item) => {
  console.log(item);
});

//Laço de repetição para saída de todas as cores ordenadas
console.log("\nOrdenar as cores:");
listaCores.sort().forEach((item) => {
  console.log(item);
});
