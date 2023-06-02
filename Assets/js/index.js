const tryButton = document.getElementById("try-button");
const resultDiv = document.getElementById("result");

tryButton.addEventListener("click", function() {
  resultDiv.style.display = "block"
  
  const code = `
    <h1>Meu Primeiro Cabeçalho</h1>
    <p>Meu Primeiro Parágrafo.</p>
  `
  
//   resultDiv.innerHTML = code
});

function copyCode(button) {
  /* Encontra o elemento de código próximo ao botão clicado */
  const codeElement = button.previousElementSibling;

  /* Cria um intervalo de seleção */
  const range = document.createRange()
  range.selectNode(codeElement)

  /* Seleciona o intervalo */
  window.getSelection().removeAllRanges()
  window.getSelection().addRange(range)

  /* Copia o código para a área de transferência */
  document.execCommand("copy")

  /* Limpa a seleção */
  window.getSelection().removeAllRanges()

}

window.addEventListener('scroll', function() {
  const button = document.getElementById('back-to-top');
  if (window.pageYOffset > 100) {
    button.style.display = 'block'; /* Exibir o botão quando rolar a página */
  } else {
    button.style.display = 'none'; /* Ocultar o botão quando voltar ao topo */
  }
});