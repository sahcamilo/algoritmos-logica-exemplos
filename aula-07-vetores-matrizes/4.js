// Importar da biblioteca 
const prompt = require('prompt-sync')()

// Vetor para armazenar os gols de cada time 
let gols = []

// Coleta dos golds de cada time 
for (let i = 0; i < 5; i++){
    gol[i] = parseInt(prompt(`Digite o N° de gol's do ${i + 1}° time.`))
}

// Variáveis para lógica de determinação (Número de Gol's)
let acimaDe3 = 0
let ate3 = 0

// Lógica para percorrer o vetor e determinar quem faz mais de 3 gol's 
for (let i = 0; i< 5; i++) {
    if(gols[i] > 3) {
        acimaDe3++
    } else {
        ate3++;
    }
}

// Exibindo resultado
console.log('')
console.log('== Resultado ==')
console.log('Tims com mais de 3 gols: ', acimaDe3)
console.log('Times com menos de 3 gols: ', ate3)