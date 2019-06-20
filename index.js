const express = require("express");
const app = express();
const PORT = 3333;

function listeningHandler() {
  console.log(`http://127.0.0.1:${PORT} 서버 시작!`);
}

app.listen(PORT, listeningHandler);
