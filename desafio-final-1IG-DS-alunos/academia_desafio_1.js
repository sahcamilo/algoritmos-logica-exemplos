// Rodar (Para ficar didático):
// npm install prompt-sync

const prompt = require('prompt-sync')();

// Codificar a partir deste ponto
let nomes = []
let idades =[]

// Introdução
console.log("Cadastro de membros! ");
console.log("");

// Coletando informações 

for (let i = 0; i < 3; i++) { 
   nomes[i] = prompt(`Escreva o nome do membro nº ${i + 1}: `);
   idades[i] = parseInt(prompt("Digite sua idade: "))
   console.log("")
}

// Ficha dos membros 
let ficha

do {
    ficha = prompt('Deseja visualizar a ficha dos membros? (sim/não) ').toLowerCase()

      if(ficha !=='sim' && ficha !=='não' && ficha !=='nao'){
        console.log("Resposta inválida! Tente novamente!")
        console.log("")
      }
}while (ficha !=='sim' && ficha !=='não' && ficha !=='nao')

// categoria
if (ficha === "sim"){
    console.log("Membros da academia")
    console.log('')

for (let i = 0; i < 3; i++) { 
    let categoria

    if (idades[i] < 18) {
        categoria = "Juvenil"
    } else if (idades [i] <= 60){
        categoria = "Adulto"
    } else  {
        categoria = "Melhor Idade"
    }

    console.log(`Membro ${i + 1}`)
    console.log(`Nome: ${nomes[i]}`)
    console.log(`Idade: ${idades[i]} anos`)
    console.log(`Categoria: ${categoria}`)
    console.log("")
}

} else  {
    console.log("Programa finalizado com sucesso!")
}

