import { Stack } from "../utils/Stack";
import { question } from "readline-sync";

const pilhaLivros = new Stack<string>();

let opcao: string;

do {
  console.log("\n=== MENU BIBLOTECA ===");
  console.log("1 - Adicionar um novo livro na pilha");
  console.log("2 - Listar todos os livros da Pilha");
  console.log("3 - Retirar um livro da pilha");
  console.log("0 - Sair");
  opcao = question("Entre com a opção desejada: ");

  switch (opcao) {
    case "1":
      pilhaLivros.push(question("Digite o nome do livro: "));
      console.log(`Livro adicionado!`);
      break;

    case "2":
      pilhaLivros.isEmpty()
        ? console.log("A pilha está vazia.")
        : pilhaLivros.printStack("Lista de Livros na Pilha");
      break;

    case "3":
      let livro = question("Digite o nome do livro para retirada: ");

      if (pilhaLivros.isEmpty() || !pilhaLivros.contains(livro)) {
        console.log("A pilha está vazia ou não contém o livro informado!");
      } else {
        pilhaLivros.removeItem(livro);
        console.log(`O Livro ${livro} foi retirado da pilha!  \n`);
        pilhaLivros.printStack("Pilha:");
      }
      
      break;

    case "0":
      console.log("Encerrando o programa.");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "0");
