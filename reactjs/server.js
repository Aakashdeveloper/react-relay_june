import express from "express";

let app = express();
//app.get('/',(req,res) => res.send("Hello node"));
app.use(express.static('public'))
app.listen(3000);