// Exercícios de interpretação de código

// Exercício 1 - Resposta:

// Matheus Nachtergaele, 
// Virginia Cavendish, 
// canal: Globo, horário: 14h


// Exercício 2 - Resposta:

/*
nome: Juca, idade: 3, raca: SRD
nome: juba, idade: 3, raca: SRD,
nome: Jubo, idade: 3, raca: SRD,
*/


// Exercício 3 - Resposta a:

//false
//undefined

// Exercício 3 - Resposta b:

// O primeiro retorna false, pois o resultado da propriedade Backender é false
// O segundo retorna undefined, pois não há propriedade para altura

// Exercícios de escrita de código

//Exercício 1 - Resposta a

// const pessoa = {
//     nome: 'Amanda',
//     apelidos: ['amandinha', 'mandinha', 'mandi'],
// }

// function mensagem (objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`)
// }

// mensagem(pessoa)


// Exercício 1 - Resposta b

// const novoObj = {
//     ...pessoa,
//     apelidos: ['Suspiro', 'princesa', 'ruivinha']
// }

// mensagem(novoObj)


//Exercício 2 - Ressposta a

// const pessoa1 = {
//     nome: 'Thiago',
//     idade: 30,
//     profissao: 'Designer', 
// }

// const pessoa2 = {
//     nome: 'Jéssica',
//     idade: 32,
//     profissao: 'serviço social'
// }

// function completarPessoa (completar) {
//     const dado1 = completar.nome
//     const dado2 = completar.nome.length
//     const dado3 = completar.idade
//     const dado4 = completar.profissao
//     const dado5 = completar.profissao.length
//     const dados = [dado1, dado2, dado3, dado4, dado5]
//     return dados
// }

//Exercício 3 a
// const carrinho = []

// // b
// const sacolao1 = {
//     fruta: 'laranja',
//     disponivel: true,
// }

// const sacolao2 = {
//     fruta: 'limão',
//     disponivel: true,
// }

// const sacolao3 = {
//     fruta: 'banana',
//     disponivel: true,
// }

// //c
// function comprar (sacolao){
//     carrinho.push(sacolao)
// }

// //d
// comprar(sacolao1)
// comprar(sacolao2)
// comprar(sacolao3)

// console.log(carrinho)

// Desafio 1

// function catalogar (){
//     const nome = prompt('Insira seu nome')
//     const idade = prompt('Insira sua idade')
//     const profissao = prompt('Insira sua profissao')
//     const informacoes = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao,
//     }
//     console.log(informacoes)
//     console.log(typeof informacoes)
// }
// catalogar()

//Desafio 2

// const film1 = {
//     filme: 'matrix',
//     anoDeLancamento:2000,
// }
// const film2 = {
//     filme: 'avatar',
//     anoDeLancamento: 2009
// }

// function filmeMaisNovo (filme1, filme2){
    
//     return `O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}
//     O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento === filme2.anoDeLancamento}`
// }

// console.log(filmeMaisNovo(film1, film2))

//Desafio 3

// function disponibilidade (sacolao) {
//     sacolao.disponivel = !sacolao.disponivel
// }

// disponibilidade(sacolao1)