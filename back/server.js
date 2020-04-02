const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

require('dotenv').config()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

const server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});