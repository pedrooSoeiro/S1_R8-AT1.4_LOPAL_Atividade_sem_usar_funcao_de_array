const idades = []
let posicao = 0
let idadeMaior = 0


for (let i = 0; i < 4; i++) {
    let idade = parseInt(prompt("Digite a "+(i + 1)+ " idade: "))
    idades[i] = idade
    if (i === 0 || idade > idadeMaior) {
        idadeMaior = idade
        posicao = i
    }
}

alert("A maior idade é " + idadeMaior)
alert("A posição em que se encontra a maior idade é "+ posicao)