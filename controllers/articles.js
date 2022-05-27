// dependencies
// initialize the router object
const router = require('express').Router();
const Article = require('../models/article');

// define routes

// Index
router.get('/', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        res.render('articles/index.ejs', {
             articles: foundArticles
        });
    });
});

// New
router.get('/new', (req, res) => {
    res.render('articles/new.ejs');
});


// Delete
router.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
        res.redirect('/articles');
    });
});

// Update
router.put('/:id', (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, (err, updatedArticle) => {
        res.redirect(`/articles/${updatedArticle._id}`);
    });
});

// Create
router.post('/', (req, res) => {
    Article.create(req.body, (err, createdArticle) => {
        console.log(err, createdArticle); // do not leave this here once done with development
        res.redirect('/articles');
    });
});

// Edit
router.get('/:id/edit', (req, res) => {
    Article.findById(req.params.id, (err, foundArticle) => {
        res.render('articles/edit.ejs', {
            article: foundArticle
        });
    });
});


// Show
router.get('/:id', (req, res) => {
    Article.findById(req.params.id, (err, foundArticle) => {
        res.render('articles/show.ejs', {
            article: foundArticle
        });
    });
});

// export our router object
module.exports = router;