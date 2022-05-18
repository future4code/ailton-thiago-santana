// EXERCÍCIOS DE INTERPRETAÇÃO

// Exercício 1 a
// Ela pede para o úsuário inserir um número, 
//transforma esse número em Number e imprime
//"Passou no teste." se for número par (não
//sobrar nada na divisão por 2) e "Não passou
//no teste" se for impar (tiver sobra na
//divisão por 2)

// Exercício 1 b
//Números pares

// Exercício 1 c
//Números ímpares

//Exercício 2 a
//Para imprimir o preço de cada fruta

//Exercício 2 b
//"O preço da fruta Maçã é R$ 2.25"

//Exercício 2 c
//5

//Exercício 3 a
//Ela está pedindo um número para o usuário
//e salvando na variável número

//Exercício 3 b
//Para 10: Esse número passou no teste
//Para -10: false

//Exercício 3 c
//Ele não vai imprimir o console.log, pois
//a mensagem está dentro do escopo da if

//EXERCÍCIOS DE ESCRITA

//Exercício 1 a
// const info = (prompt("Insira a sua idade"))

// //Exercício 1 b
// const idade = Number(info)

// //Exercício 1 c
// if (idade >= 18) {
//     console.log("Você pode dirigir.")
    
// } else {
//     console.log("Você não pode dirigir.")
// }
    
// //Exercício 2 a
// const turno = prompt("Qual o seu turno? M (matutino), V (Vespertino ou N (Nortuno)").toUpperCase()
// //const turno = respostaAluno.toUpperCase()

// if (turno === "M"){
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
// }   

//Exercício 3
// const turno = prompt("Qual o seu turno? M (matutino), V (Vespertino ou N (Nortuno)").toUpperCase()

// switch (turno) {
//     case 'M':
//         console.log("Bom dia!")
//         break
//     case 'V':
//         console.log("Boa tarde!")
//         break
//     case 'N':
//         console.log("Boa noite!")
//         break
// }

//Exercício 4
// let generoDoFilme = confirm('O filme é de fantasia?')
// let ingresso = confirm('O ingresso custa menos que R$15,00?')
// const cinema = (generoDoFilme, ingresso) => {
//     if (generoDoFilme && ingresso) {
//         return "Bom filme"
//     } else {
//         return "Escolha outro filme :("
//     }
// }
// console.log(cinema(generoDoFilme, ingresso))