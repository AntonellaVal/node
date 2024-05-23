

const express = require ("express");

const app = express();

const port = 3001;

const {getRobots, getRobotsById} = require ("./controladores/getRobots");

// rutas
app.get("/", getRobots);

app.get("/:id", getRobotsById);

app.get("/", req ,res , ()=>{
    res.json ({
        robots:robots
    })

})

app.listen(port,()=>{
    console.log(`conectado ok con el puerto: ${port}`);
})