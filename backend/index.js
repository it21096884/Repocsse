require("./db.js");


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var OrderRoutes = require("./controllers/OrderController")
var ConstructionsRoutes = require("./controllers/ConstructionsController")

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }))
app.listen(3500, () => console.log("Server started at : 3500"))

app.use("/Orders", OrderRoutes)
app.use("/Constructions", ConstructionsRoutes)

app.use(express.static("public"))
