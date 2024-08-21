// Exibir o prompt1 ao carregar a página
window.onload = function () {
  document.getElementById("prompt1").style.display = "block";
};

function showFinalPrompt() {
  const prompts = document.querySelectorAll(".prompt-container");
  prompts.forEach((prompt) => {
    prompt.style.display = "none";
  });

  document.getElementById("prompt6").style.display = "block";
}

// Função para mostrar o próximo prompt
function showPrompt(promptId) {
  // Esconder todos os prompts
  const prompts = document.querySelectorAll(".prompt-container");
  prompts.forEach((prompt) => {
    prompt.style.display = "none";
  });

  // Exibir o prompt selecionado
  document.getElementById(promptId).style.display = "block";
}

// Ações dos botões no prompt1
document.getElementById("sim1").onclick = function () {
  showPrompt("prompt2");
};

document.getElementById("nao1").onclick = function () {
  showPrompt("prompt3");
};

// Ações dos botões no prompt2
document.getElementById("sim2").onclick = function () {
  showPrompt("prompt4");
};

document.getElementById("nao2").onclick = function () {
  showPrompt("prompt3");
};

document.getElementById("nextPage1").onclick = function () {
  const beautyLevel = document.getElementById("beautyLevel").value;

  if (beautyLevel === "99999999999") {
    showPrompt("prompt5");
  } else {
    alert("Só isso de beleza? Está errado!");
    document.getElementById("beautyLevel").value = "99999999999";
  }
};

document.getElementById("nextPage2").onclick = function () {
  const nomeCompleto = document.getElementById("nomeCompleto").value;
  const nomeNamorado = document.getElementById("nomeNamorado").value;
  const inveja = document.getElementById("inveja").value;

  if (nomeCompleto != "Lorena Rodrigues Venturini Ribeiro") {
    alert("Acho que tá faltando alguma coisa no seu nome... 😚");
    document.getElementById("nomeCompleto").value =
      "Lorena Rodrigues Venturini Ribeiro";
  } else if (nomeNamorado != "Lorenzo Venturini Ribeiro de Almeida") {
    alert("E o nome do seu momo? Acho q ta faltando alguma coisa tbm 😅");
    document.getElementById("nomeNamorado").value =
      "Lorenzo Venturini Ribeiro de Almeida";
  } else if (inveja != "Sim, muita") {
    alert("Além de invejosa, é mentirosa também, eu mereço 🤔");
    document.getElementById("inveja").value = "Sim, muita";
  } else {
    showFinalPrompt("prompt6");
  }
};
