document.getElementById("buttonQuiz").addEventListener("click", () => {
  window.location.href = "quiz/index.html";
});

const descricoes = {
    nucleo :"O núcleo é a organela central das células eucarióticas, responsável por armazenar o material genético (DNA) e controlar as atividades celulares, como o metabolismo e a divisão celular. Ele contém o nucléolo, onde ocorre a produção de ribossomos, e é envolvido por uma membrana nuclear que separa seu conteúdo do citoplasma.",
    mitocondria : "Conhecida como a usina de energia da célula, a mitocôndria é responsável pela produção de ATP (adenosina trifosfato) através da respiração celular. Esse processo converte nutrientes em energia utilizável pela célula. Além disso, as mitocôndrias possuem DNA próprio, o que apoia a teoria de que elas originaram-se de organismos procariontes simbiótico.",
    reticuloRugoso : "O retículo endoplasmático rugoso é uma rede de membranas coberta por ribossomos, responsável pela síntese e o transporte de proteínas. Ele atua na modificação e no envio dessas proteínas para outras organelas ou para exportação celular.",
    reticuloLiso : "O REL é uma rede de túbulos membranosos que desempenha funções como a síntese de lipídios, metabolismo de carboidratos e desintoxicação de substâncias nocivas. Em células musculares, ele também regula os níveis de cálcio, sendo chamado de retículo sarcoplasmático.",
    complexoGolgiense : "O Complexo de Golgi é responsável por modificar, empacotar e distribuir proteínas e lipídios sintetizados no retículo endoplasmático. Ele também origina estruturas como lisossomos e acrossomos, além de participar na formação da parede celular em vegetais.",
    lisossomos : "Lisossomos são vesículas que contêm enzimas digestivas, atuando na degradação de partículas ingeridas pela célula e na reciclagem de componentes celulares danificados. Eles desempenham um papel crucial na digestão intracelular e na manutenção da saúde celular.",
    peroxissomos : "Peroxissomos são vesículas que contêm enzimas oxidativas, atuando na quebra de ácidos graxos e na neutralização de substâncias tóxicas, como o peróxido de hidrogênio. Eles contribuem para a desintoxicação celular e o metabolismo lipídico.",
    ribossomos : "Ribossomos são estruturas responsáveis pela síntese de proteínas, lendo o RNA mensageiro e ligando aminoácidos em sequência. Podem estar livres no citoplasma ou ligados ao retículo endoplasmático, sendo essenciais à produção proteica.",
    citoesqueleto : "O citoesqueleto é uma rede de fibras proteicas que fornece sustentação, forma e organização interna à célula. Ele participa do transporte intracelular, da movimentação celular e da divisão celular, garantindo estabilidade e dinâmica.",
    centrossomo : "O centrossomo é uma região próxima ao núcleo que organiza os microtúbulos e participa da formação do fuso mitótico. Ele atua na organização do citoesqueleto e na divisão celular, sendo fundamental para a distribuição dos cromossomos.",
    centriolos : "Centríolos são estruturas cilíndricas formadas por microtúbulos, localizadas no interior do centrossomo. Eles auxiliam na formação do fuso mitótico e de estruturas como cílios e flagelos, sendo importantes na divisão e movimentação celular.",
    vacuolo : "O vacúolo é uma organela envolvida por membrana que armazena água, íons, resíduos e substâncias diversas. Nas células vegetais, ele atua na regulação osmótica, no armazenamento de nutrientes e na manutenção da forma celular.",
    cloroplasto : "Cloroplastos são organelas exclusivas de células vegetais e algas, onde ocorre a fotossíntese. Contêm clorofila e convertem energia solar em energia química, sendo essenciais para a produção de glicose e liberação de oxigênio.",
    cromoplasto : "Cromoplastos são plastídios que armazenam pigmentos como carotenoides, responsáveis pelas cores amarela, laranja e vermelha em frutas e flores. Eles não realizam fotossíntese, mas têm papel na atração de polinizadores e dispersores.",
    leucoplasto : "Leucoplastos são plastídios incolores especializados no armazenamento de substâncias como amido, lipídios e proteínas. Estão presentes em tecidos não fotossintéticos, como raízes e sementes, contribuindo para o armazenamento energético.",
    paredeCelular : "A parede celular é uma estrutura rígida que envolve as células vegetais, bacterianas e fúngicas, oferecendo proteção, sustentação e forma definida. Composta por celulose nas plantas, ela regula a entrada de substâncias e resiste à pressão osmótica."
}
document.querySelectorAll(".cards").forEach(card => {
  const title = card.querySelector(".cardsTitles");
  const desc = card.querySelector(".cardDescription");
  const organela = card.dataset.organela;

  card.addEventListener("click", () => {
    const isVisible = desc.style.opacity === "1";

    document.querySelectorAll(".cardDescription").forEach(d => {
      d.style.opacity = "0";
      d.style.maxHeight = "0";
      d.textContent = "";
    });
    document.querySelectorAll(".cards").forEach(c => {
      c.style.justifyContent = "center";
      c.querySelector(".cardsTitles").style.marginBottom = "0";
    });

    if (isVisible) return;

    desc.textContent = descricoes[organela] || "Descrição não disponível.";
    desc.style.opacity = "1";
    desc.style.maxHeight = "300px";

    card.style.justifyContent = "flex-start";
    title.style.marginBottom = "10px";
  });
});