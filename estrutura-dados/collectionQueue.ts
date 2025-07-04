import { Queue } from "../utils/Queue";
import { question } from "readline-sync";

const filaBanco = new Queue<string>();

let opcao: string;

do {
  console.log("\n=== MENU BANCO ===");
  console.log("1 - Adicionar cliente à fila");
  console.log("2 - Listar clientes na fila");
  console.log("3 - Chamar próximo cliente");
  console.log("0 - Sair");
  opcao = question("Digite uma opção: ");

  switch (opcao) {
    case "1":
      filaBanco.enqueue(question("Digite o nome: "));
      console.log(`Cliente adicionado!`);
      break;

    case "2":
      filaBanco.isEmpty()
        ? console.log("A fila está vazia.")
        : filaBanco.printQueue("Lista de Clientes na Fila:");
      break;

    case "3":
      filaBanco.isEmpty()
        ? console.log("A fila está vazia.")
        : (console.log(`O Cliente ${filaBanco.peek()} foi Chamado!  \n`),
          filaBanco.dequeue(),
          filaBanco.printQueue("Fila:"));

      break;

    case "0":
      console.log("Encerrando o programa.");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "0");
