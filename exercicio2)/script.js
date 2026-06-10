const nome = []
const sexo = []
const salarios = []
let mulheresQueGanhamMaisDe5000 = 0

for (let i = 0; i < 5; i++) {
    nome[i] = prompt("Digite o nome do " + (i + 1) + "º funcionário: ")
    sexo[i] = prompt("Digite o sexo do " + (i + 1) + "º funcionário (M/F): ")
    salarios[i] = parseFloat(prompt("Digite o salário do " + (i + 1) + "º funcionário: "))
}

alert("Funcionários do sexo feminino que ganham mais de R$ 5000,00: ")

for (let i = 0; i < 5; i++) {
    if ((sexo[i] == "f" || sexo[i] == "F") && salarios[i] >= 5000) {
        alert(nome[i])
        mulheresQueGanhamMaisDe5000++
    }
}
alert("O número de mulheres que ganham mais de R$ 5000,00 é: " + mulheresQueGanhamMaisDe5000)