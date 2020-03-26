const express = require('express');

const app = express();

const formRouter = require("./route");
app.use(express.json());

app.use("/", formRouter);

app.listen(7000, ()=> {console.log('server up and running!!')});