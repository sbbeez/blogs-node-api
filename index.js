// imports
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// app creation
const app = express();

//app set up
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));


require("./Routes/blogs.routes")(app);


//port set up
app.listen(7532);