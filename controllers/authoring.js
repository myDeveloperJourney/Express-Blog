const express = require("express");
const router = express.Router();
const Author = require("../models/authors.js");
// Routes
// I
router.get("/", (req, res) => {
	Author.find({}, (err, foundAuthors) => {
		res.render("authors/index.ejs", {
			authors: foundAuthors,
		});
	});
});
// N
router.get("/new", (req, res) => {
	res.render("authors/new.ejs");
}
	// D
	router.delete("/:id", (req, res) => {
		Author.findByIdAndRemove(req.params.id, () => {
			res.redirect("/authors");
		});
	});
	// U
	router.put("/:id", (req, res) => {
		Author.findByIdAndUpdate(req.params.id, req.body, () => {
			res.redirect("/authors");
		});
	});
	// C
	router.post("/", (req, res) => {
		Author.create(req.body, (err, createdAuthor) => {
			res.redirect("/authors");
		});
	});
});
// E
router.get("/:id/edit", (req, res) => {
	Author.findById(req.params.id, (err, foundAuthor) => {
		res.render("authors/edit.ejs", {
			author: foundAuthor,
		});
	});
});
// S
router.get("/:id", (req, res) => {
	Author.findById(req.params.id, (err, foundAuthor) => {
		res.render("authors/show.ejs", {
			author: foundAuthor,
		});
	});
});
// Export
module.exports = router;
