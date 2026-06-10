const nomes = [];
const alturas = [];
let posicao = 0;
let continuar = "";

let alturaMaior = 0;
let nomeDaPessoaMaisAlta = "";
let menorAltura = 0;
let nomeDaPessoaMaisBaixa = "";

let altura = 0; 
let nome = "";

continuar = prompt("Deseja cadastrar uma pessoa? (s/n)");

while (continuar == "s" || continuar == "S") {
    nome = prompt("Digite o nome da pessoa: ");
    altura = parseFloat(prompt("Digite a altura da pessoa: "));
    
    nomes[posicao] = nome;
    alturas[posicao] = altura;
    posicao++; 
    
    continuar = prompt("Deseja cadastrar outra pessoa? (s/n)");
}

if (posicao > 0) {
    alturaMaior = alturas[0];
    nomeDaPessoaMaisAlta = nomes[0];
    
    menorAltura = alturas[0];
    nomeDaPessoaMaisBaixa = nomes[0];

    for (let i = 1; i < posicao; i++) {
        if (alturas[i] > alturaMaior) {
            alturaMaior = alturas[i];       
            nomeDaPessoaMaisAlta = nomes[i]; 
        }
        
        if (alturas[i] < menorAltura) {
            menorAltura = alturas[i];       
            nomeDaPessoaMaisBaixa = nomes[i];
        }
    }

    alert("A pessoa mais alta é " + nomeDaPessoaMaisAlta + " com " + alturaMaior + "m");
    alert("A pessoa mais baixa é " + nomeDaPessoaMaisBaixa + " com " + menorAltura + "m");

} else {
    alert("Nenhuma pessoa foi cadastrada.");
}