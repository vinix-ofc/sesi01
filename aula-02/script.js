// Criando as variáveis
const nome = document.getElementById("nome");
const resultado = document.getElementById("resultado");
 
const cidade = document.getElementById("cidade");
const resultadoCid = document.getElementById("resultadoCid");
 
// Criando função
 
function limparCampos(){
    nome.value = "";
    cidade.value = "";
}
 
function mudar(event) {
  event.preventDefault();
  console.log(nome.value);
  console.log(cidade.value);
 
  // Imprimir nome na tela
  resultado.innerHTML = nome.value
  resultadoCid.innerHTML = cidade.value
 
  //Limpando campos
 
}
 
 