const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/enviar-respostas", (req, res) => {
  const respostas = req.body;

  if (!fs.existsSync("quiz.json")) {
    fs.writeFileSync("quiz.json", "[]");
  }
  fs.readFile("quiz.json", "utf8", (err, data) => {
    let registros = [];

    try {
      registros = JSON.parse(data);
    } catch (e) {
      return res.status(500).json({ message: "Erro ao ler o arquivo JSON." });
    }

    registros.push({
      data: new Date().toISOString(),
      respostas: respostas,
    });

    fs.writeFile("quiz.json", JSON.stringify(registros, null, 2), (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erro ao salvar as respostas." });
      }
      res.json({ message: "Respostas salvas com sucesso!" });
    });
  });
});

/*
http://localhost:3000
*/
