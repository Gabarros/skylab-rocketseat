const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("Rodando!");
});

app.listen(3000);