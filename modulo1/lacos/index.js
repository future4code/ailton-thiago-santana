// const numerosDigitados = []
// let numeroUsuario = +prompt("digite um número")
// numerosDigitados.push(numeroUsuario)

// while (numeroUsuario !== 0) {
//     numeroUsuario = +prompt("digite um número")
//     numerosDigitados.push(numeroUsuario)
// }

// let contador = 0;
// let soma = 0;

// while (contador < numerosDigitados.length) {
//     soma = soma + numerosDigitados[contador]
//     contador = contador + 1
// }

// console.log(soma)

// const maior = (arr) => {
//     let maior = 0
//     for(let i = 0; i < arr.length; i++) {
//         const elemento = arr[i]
//         if (elemento > maior) {
//             maior = elemento
//         }
//     }

//     console.log(maior)
// }

// maior([11, 15, 18, 14, 12, 13])

const juntaPalavras = [arr] => {
    let frase = ""

    for(let frase of arr) {
        frase = frase + " "
        frase = frase + palavras
    }
    console.log(frase)
}

juntaPalavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
