const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o App
const app = express();

// Permitindo uso de JSON na API
app.use(express.json());
app.use(cors());

//Iniciando o DB com mongoose
mongoose.connect(
    'mongodb+srv://desenvolvedor:desenvolvimento123@cluster0-gedzb.mongodb.net/products?retryWrites=true&w=majority',
    {useUnifiedTopology: true, useNewUrlParser: true});


// Importação de todo o diretório
requireDir('./src/models');


//Usando as rotas

app.use('/api', require('./src/routes'));

app.listen(3000);