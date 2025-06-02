document
  .getElementById("quizForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const answers = {};
    for (const [key, value] of formData.entries()) {
      answers[key] = value;
    }

    const response = await fetch("http://localhost:3000/enviar-respostas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    });

    const result = await response.json();
    alert(result.message);
  });

function Description(cardElement) {
  const desc = cardElement.querySelector(".cardDescription");
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}
