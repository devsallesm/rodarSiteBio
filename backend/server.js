const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/enviar-respostas", (req, res) => {
  const respostas = req.body;

  fs.readFile("respostas.json", "utf8", (err, data) => {
    let registros = [];

    if (!err && data) {
      registros = JSON.parse(data);
    }

    registros.push({
      data: new Date().toISOString(),
      respostas: respostas
    });

    fs.writeFile("respostas.json", JSON.stringify(registros, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Erro ao salvar as respostas." });
      }
      res.json({ message: "Respostas salvas com sucesso!" });
    });
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});