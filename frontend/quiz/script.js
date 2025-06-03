document
  .getElementById("quizForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const mensagemEl = document.getElementById("mensagem");
    mensagemEl.textContent = "";
    mensagemEl.style.color = "black";

    const perguntas = Array.from({ length: 10 }, (_, i) => `q${i + 1}`);
    const respostas = {};
    let todasRespondidas = true;

    // Antes de validar, limpa todos os destaques anteriores
    perguntas.forEach((pergunta) => {
      const inputs = this.querySelectorAll(`input[name="${pergunta}"]`);
      inputs.forEach(
        (input) => (input.parentElement.style.backgroundColor = "transparent")
      );
    });

    for (const pergunta of perguntas) {
      const marcada = this.querySelector(`input[name="${pergunta}"]:checked`);
      if (!marcada) {
        // Destaca a pergunta não respondida
        const inputs = this.querySelectorAll(`input[name="${pergunta}"]`);
        inputs.forEach(
          (input) => (input.parentElement.style.backgroundColor = "#ffdddd")
        ); // vermelho claro
        todasRespondidas = false;
      } else {
        respostas[pergunta] = marcada.value;
      }
    }

    if (!todasRespondidas) {
      mensagemEl.textContent =
        "❌ Por favor, responda todas as perguntas antes de enviar.";
        input.parentElement.classList.add("highlight-error");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/enviar-respostas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(respostas),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao enviar respostas.");
      }

      const result = await response.json();
      mensagemEl.textContent = result.message;
      mensagemEl.style.color = "green";
      input.parentElement.classList.remove("highlight-error");
      this.reset();

      // Limpa o destaque após envio com sucesso
      perguntas.forEach((pergunta) => {
        const inputs = this.querySelectorAll(`input[name="${pergunta}"]`);
        inputs.forEach(
          (input) => (input.parentElement.style.backgroundColor = "transparent")
        );
      });
    } catch (error) {
      mensagemEl.textContent = "❌ Erro: " + error.message;
      input.parentElement.classList.add("highlight-error");
    }
  });
function Description(cardElement) {
  const desc = cardElement.querySelector(".cardDescription");
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}
