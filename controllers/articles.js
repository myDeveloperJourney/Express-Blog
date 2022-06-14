// dependencies
// initialize the router object
const router = require('express').Router();
const Article = require('../models/article');
const Author = require('../models/author');
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
    Author.find({}, (err, authors) => {
        res.render('articles/new.ejs', { authors });
    });
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
    Article.findById(req.params.id).populate('authoredBy').exec((err, foundArticle) => {
        res.render('articles/show.ejs', {
            article: foundArticle
        });
    });
});

// add reviews to articles
router.post('/:id/reviews', (req, res) => {
    Article.findById(req.params.id, (err, article) => {
        article.reviews.push(req.body);
        article.save(() => {
            res.redirect(`/articles/${article._id}`);
        });
    });
});

// export our router object
module.exports = router;