window.onload = function () {
  const botaoNao = document.getElementById("nao");

  function fugir() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - larguraBotao);
    const novaPosicaoY = Math.random() * (alturaJanela - alturaBotao);

    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
  }

  botaoNao.addEventListener("mouseover", fugir);
  botaoNao.addEventListener("touchstart", fugir);
};

function aceitou() {
  window.location.href = "aceitou.html";
}
