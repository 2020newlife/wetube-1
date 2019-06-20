// const express = require("express");
import express from "express";
const app = express();
const PORT = 3333;

// function listeningHandler() {
//   console.log(`http://127.0.0.1:${PORT} 서버 시작!`);
// }
// function homeHandler(req, res) {
//   console.log("Home Start!!");
//   res.send("Home Start!!");
// }
// function profileHandler(req, res) {
//   console.log("Profile Start!!");
//   res.send("Profile Start!!");
// }
const listeningHandler = () =>
  console.log(`http://127.0.0.1:${PORT} 서버 시작!`);

const homeHandler = (req, res) => {
  console.log("Home Start!!");
  res.send("Home Start!!");
};
const profileHandler = (req, res) => {
  console.log("Profile Start!!");
  res.send("Profile Start!!");
};

app.get("/", homeHandler);
app.get("/profile", profileHandler);

app.listen(PORT, listeningHandler);
