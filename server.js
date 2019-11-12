const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o App
const app = express();

//Iniciando o DB com mongoose
mongoose.connect(
    'mongodb+srv://desenvolvedor:desenvolvimento123@cluster0-gedzb.mongodb.net/products?retryWrites=true&w=majority',
    {useUnifiedTopology: true, useNewUrlParser: true});


// Importação de todo o diretório
requireDir('./src/models');


//Usando as rotas

app.use('/api', require('./src/routes'));

app.listen(3000);