// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:

const nome = prompt("Qual seu nome?");
const comi1 = prompt("Digite a sua primeira comida favorita");    
const comi2 = prompt("Digite sua segunda comida favorita ");
const comi3 = prompt("Digite sua terceira comida favorita");

//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```

function resp (){
    const p0 =console.log("Estas são as suas comidas favoritas",nome+":"
    ,"\nSua primeira comida é :",comi1
    ,"\nSua segunda comida é :",comi2
    ,"\nSua terceira comida é :",comi3);
    
    return (p0)
}

// Você deve usar apenas um `console.log()` para isso
(resp(nome,comi1,comi2,comi3));

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>
    