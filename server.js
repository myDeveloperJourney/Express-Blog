require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const authorsController = require("./controllers/authors");
const articlesController = require("./controllers/articles");

const app = express();

const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
	useUnifiedTopology: true,
});

db = mongoose.connection;

db.on("error", (err) =>
	console.log(`${err.message}  is mongodb not connected?`)
);
db.on("connected", () => console.log("MONGO is connected"));
db.on("disconnected", () => console.log("mongo has disconnected"));

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use("/authors", authorsController);
app.use("/articles", articlesController);

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
