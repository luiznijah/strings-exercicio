// //Crie a const para a frase aqui
// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

const boasVindas ="Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\".";
console.log(boasVindas);
// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const boasVindas1 = boasVindas.replace("verde","rosa")
const boasVindas2 = boasVindas1.replace("azul","laranja")


// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(boasVindas2);
// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log(boasVindas2.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"));