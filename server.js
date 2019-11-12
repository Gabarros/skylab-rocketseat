const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect('mongodb+srv://desenvolvedor:desenvolvimento123@cluster0-gedzb.mongodb.net/test?retryWrites=true&w=majority')

// Iniciando Rotas
app.get('/', (req, res)=>{
    res.send("Rodando!");
});

app.listen(3000);