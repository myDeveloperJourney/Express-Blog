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

// Create
router.post('/', (req, res) => {
    Article.create(req.body, (err, createdArticle) => {
        console.log(err, createdArticle); // do not leave this here once done with development
        res.redirect('/articles');
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