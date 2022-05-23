
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a}===${b} é ${a===b}`
// }
// console.log(checarIgualdade(1, 2))
// // c-)Faça uma função chamada "verificaSeEMaior"

// function verificaSeEMaior(a, b) {
//     return `No comparador verifica se é maior ${a}>${b} é ${a>b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false, pois um é number e o outro é string
// // b-) 1=='1'= false, pois um é number e o outro é string
// // c-) 'a'==='b'= false, pois 'a'!=='b'
// // d-) 'b'>'a'= true, pois 'b' é maior que 'a' de acordo com a posição no alfabeto
// // e-) 0!==null= true, pois indicam coisas


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
    const usuario = []
    //  Sua lógica aqui
const nomeDeUsuario = prompt('Digite seu nome')
const anoDeNascimento = prompt('Digite seu ano de nascimento')
const senha = prompt('Crie uma senha')
const nacionalidade = prompt('Insira sua nacionalidade')

if (anoDeNascimento <= 2004) {
    usuario.push(anoDeNascimento)
} else {
    console.log('Para se cadastrar, você precisa ser maior de idade')
} if (nacionalidade === 'brasileira') {
    usuario.push(nacionalidade)
} else {
    console.log('Para se cadastrar, precisa ter nacionalidade brasileira')
} if (senha.length >= 6){
    usuario.push(senha)
} else {
    console.log('senha precisa ter 6 ou mais caracteres')
}
console.log(usuario)
}
cadastro()


// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

//     //  Sua lógica aqui


// }
// console.log(primeiraDose())


// // LOOP+CONDICIONAL

// // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     //  Sua lógica aqui

// }
// console.log(avisoAosAtrasados());


// // DESAFIO------------------------------------------------------------------------------------------

// const usuarios = [
//     {
//         nome: "Artur",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "pfizer",
//         imunizacao: "incompleta"
//     },
//     {
//         nome: "Bárbara",
//         ano: 1984,
//         nacionalidae: "brasileira",
//         senha: "labenu",
//         vacina: "astrazenica",
//         imunizacao: "completa"
//     },
//     {
//         nome: "Carlos",
//         ano: 2000,
//         nacionalidae: "brasileiro",
//         senha: "123456",
//         vacina: "coronavac",
//         imunizacao: "incompleta"
//     }

// ]

// const cadastroDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());