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

  /* Alerta de sucesso */
  alert("Código copiado com sucesso")
}

                



