const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // Listagem de Produtos
    async index(req, res){
        // Buscando registros no banco e armazenando
        const products = await Product.find();

        // Devolvendo listagem dos registros
        return res.json(products);

    },
    // Mostrar Produto
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    // Criação de novo produto
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);

    },
    // Atualização de produto
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });  
        return res.json(product);

    },
    // Remoção de produto
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.status(200).send();

    }
};