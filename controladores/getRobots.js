const {request, response} = require("express");
const {robots} = require("../robots");

const getRobots = (req= request, res = response)=>{
        return res.json({
            robots:robots
    });
}

const getRobotsById = (req = request = res = response) =>{
    const id = req.params.id;

    let robotS= "";

    robotS = robots.find ((robots )=>{
        return robots.id === id;
    })


    if (robotS){
        return res.json ({
            ok: true,
            robotS,
            statusCode:200
        });
    } else{
        return res.json ({
            ok: false,
            msg:"error, no nay un robt con esa id",
            statusCode:484
        });

    }
}

module.exports = {
    getRobots,
    getRobotsById
}

