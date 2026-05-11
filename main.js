const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    const indice = Number(this.dataset.aba ?? i);

    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      abas[j].classList.remove("ativo");
    }

    this.classList.add("ativo");
    abas[indice].classList.add("ativo");
  };
}