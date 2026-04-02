<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Convite para a Maiara 💖</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="link-topo">
  🔗 convite-para-a-maiara.com 💌
</div>

<div class="container">
  <h1>💖 Convite especial 💖</h1>
  <p class="pergunta">Você quer sair pra jantar comigo? 😏</p>

  <div class="buttons">
    <button id="sim" onclick="aceitou()">Sim 💕</button>
    <button id="nao">Não 😢</button>
  </div>
</div>

<div class="hearts"></div>

<script>
  const botaoNao = document.getElementById("nao");

  function moverBotao() {
    const margem = 20;
    const larguraTela = window.innerWidth - botaoNao.offsetWidth - margem;
    const alturaTela = window.innerHeight - botaoNao.offsetHeight - margem;

    const x = Math.random() * larguraTela;
    const y = Math.random() * alturaTela;

    botaoNao.style.position = "fixed";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
  }

  // Desktop
  botaoNao.addEventListener("mouseenter", moverBotao);

  // Mobile
  botaoNao.addEventListener("touchstart", moverBotao);

  function aceitou() {
    window.location.href = "aceitou.html";
  }

  // Corações subindo 💖
  function criarCoracao() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

  setInterval(criarCoracao, 500);
</script>

</body>
</html>
