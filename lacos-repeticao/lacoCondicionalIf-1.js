//Importação da função
import { questionInt } from "readline-sync";

//Recebimento de dados pelo pronpt
let A = questionInt("Digite o valor de A: ");
let B = questionInt("Digite o valor de B: ");
let C = questionInt("Digite o o valor de C: ");

let AB = A + B;
if (AB > C) {
  console.log("A Soma de A + B é Maior do que a C");
} else if (AB < C) {
  console.log("A Soma de A + B é Menor do que a C");
} else if ((AB = C)) {
  console.log("A Soma de A + B é Igual do que a C");
}
