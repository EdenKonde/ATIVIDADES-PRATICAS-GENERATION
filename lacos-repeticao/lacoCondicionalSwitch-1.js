//Importação da função
import { questionInt } from "readline-sync";

// Exibe a tabela de produtos
console.log("===== CARDÁPIO =====");
console.log("Código | Produto           | Preço (R$)");
console.log("  1    | Cachorro Quente   | 10.00");
console.log("  2    | X-Salada          | 15.00");
console.log("  3    | X-Bacon           | 18.00");
console.log("  4    | Bauru             | 12.00");
console.log("  5    | Refrigerante      | 8.00");
console.log("  6    | Suco de laranja   | 13.00");
console.log("==========================\n");

//Recebimento de dados pelo pronpt
let codigo = questionInt("Digite o codigo do produto (1 a 6): ");
let quantidade = questionInt("Digite a quantidade: ");

let produto;
let preco;

// Verifica o código do produto usando switch
switch (codigo) {
  case 1:
    produto = "Cachorro Quente";
    preco = 10.0;
    break;
  case 2:
    produto = "X-Salada";
    preco = 15.0;
    break;
  case 3:
    produto = "X-Bacon";
    preco = 18.0;
    break;
  case 4:
    produto = "Bauru";
    preco = 12.0;
    break;
  case 5:
    produto = "Refrigerante";
    preco = 8.0;
    break;
  case 6:
    produto = "Suco de laranja";
    preco = 13.0;
    break;
  default:
    console.log("Código de produto inválido.");
}

// Calculo do total
const total = preco * quantidade;

//Exibição do resultado
console.log(`Você escolheu: ${produto}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: R$ ${total}`);
