// dependencies
// initialize the router object
const router = require('express').Router();
const Article = require('../models/article');

// define routes

// Index
router.get('/', (req, res) => {
    res.render('articles/index.ejs');
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

// export our router object
module.exports = router;