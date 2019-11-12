const mongoose = require('mongoose');

// Criação do Schema
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

// Registrando o model na aplicação
mongoose.model('Product', ProductSchema);