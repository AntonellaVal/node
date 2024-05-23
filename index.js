

const express = require ("express");

const app = express();

const port = 3001;

const {robots} = require("./robots");

app.get("/", req ,res , ()=>{
    res.json ({
        robots:robots
    })

})

app.listen(port,()=>{
    console.log(`conectado ok con el puerto: ${port}`);
})