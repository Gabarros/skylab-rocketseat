const express = require('express');
const routes = express.Router();

const ProductConntroller = require('./controllers/ProductController');


// Iniciando Rotas
routes.get('/products', ProductConntroller.index);

module.exports = routes;