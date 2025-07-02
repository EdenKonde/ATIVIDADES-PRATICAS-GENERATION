//Importação da função
import { questionFloat } from "readline-sync";

//Recebimento de dados pelo pronpt
let primeiraNota = questionFloat("Digite a primeira nota: ");
let segundaNota = questionFloat("Digite a segunda nota: ");
let terceiraNota = questionFloat("Digite a terceira nota: ");
let quartaNota = questionFloat("Digite a quarta nota: ");

// Cálculo da Média
let mediaNotas = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
mediaNotas = mediaNotas.toFixed(2);

//Saída
console.log(`A média das notas é: ${mediaNotas}`);
