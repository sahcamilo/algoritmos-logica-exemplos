//Instalação biblioteca
//npm install prompt-sync

//Importação da biblioteca
const prompt = require('prompt-sync')()

// Criando o vetor (Técnnica para guardar informações)
let filmes = []

// Primeira pergunta 
console.log('Digite o nome dos 5 filmes abaixo: ')
console.log('') // Linha em branco 

// Laço de repetição paa coletar o nome dos filmes
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt(`Digite o nome do ${i + 1}° filme:  `)
}

// Exibindo os nomes dos filmes 
console.log('____________________')
console.log('Nome dos filmes digitados: ')
console.log('')

for (let i = 0; i < 5; i++){
    console.log(`O nome do ${i + i}° filme digitado foi: ${filmes[i]}. `)
}
