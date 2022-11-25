// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:


// a) Remova o excesso de espaços no final da string;
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaString1 = minhaString.replaceAll("________","");

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(minhaString);
console.log("Possui",minhaString.length,"caracteres");
console.log(minhaString1);
console.log("Possui",minhaString1.length,"caracteres");

// c) Substitua os traços `________` por “sticioso”.

const minhaString2 = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaString3 = minhaString.replaceAll("________","sticioso");
console.log(minhaString2);
console.log(minhaString3);