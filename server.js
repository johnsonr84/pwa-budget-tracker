const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//Set up PORT env or localhost
const PORT = 3000;

const app = express();

//Initialize middelwares
app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect to mongodb atlas and server
mongoose.connect("mongodb://localhost/budget", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});