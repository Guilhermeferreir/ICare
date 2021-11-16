const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("ICaree")
});

app.listen(8080, function(){
    console.log("Servidor rodando na 8080")
});