const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        // Buscando registros no banco e armazenando
        const products = await Product.find();

        // Devolvendo listagem dos registros
        return res.json(products);

    },
};