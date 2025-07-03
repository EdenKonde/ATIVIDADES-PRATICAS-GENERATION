import { questionInt } from "readline-sync";

//Contadores
let idadeMenor21 = 0;
let idadeMaior50 = 0;

// Entrada de dados
let idade = questionInt(
  "Digite uma idade (digite uma idade negativa para finalizar) :"
);

while (idade >= 0) {
  if (idade < 21) {
    idadeMenor21++;
  } else if (idade > 50) {
    idadeMaior50++;
  }

  idade = questionInt(
    "Digite uma idade (digite uma idade negativa para finalizar):"
  );
}

//Saída
console.log(`Total de pessoas menores de 21 anos: ${idadeMenor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${idadeMaior50}`);
