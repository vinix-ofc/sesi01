const nome = prompt("Digite seu nome");
const idade = prompt("Digite sua idade");

console.log(`Meu nome é: ${nome} e tenho ${idade} anos`);

// Criando uma função
function minhaFuncao() {
    console.log("Minha função");
}

function dados(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
}

// Chamando a função
dados("Neymar", 33);
dados("Cristiano Ronaldo", 41);
dados("Messi", 32);

// minhaFuncao();