import { questionInt } from "readline-sync";

// Iniciando um SET  vazio
const numSet: Set<number> = new Set();

// Laço de repetição para entrada de dados
while (numSet.size < 10) {
  let num = questionInt(`Digite 10 numeros inteiros diferentes : `);

  if (numSet.has(num)) {
    continue;
  }
  numSet.add(num);
}

//Laço de repetição para saída da lista Set
console.log("Listar dados do Set:");
numSet.forEach((item) => {
  console.log(item);
});
