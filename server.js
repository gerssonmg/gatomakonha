const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// ? Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// ? Iniciando o banco de dados

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://perinazzoo:<seenha123>@cluster0-cewae.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

requireDir("./src/models");

// ? Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
