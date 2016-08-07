"use strict";

var express = require("express");
var app = express();

app.get("/",(req, res) => {
    res.send(process.env.MESSAGE || "Default message");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, () => {
    console.log("Listening on : "+ port);
});