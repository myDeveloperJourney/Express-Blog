// dependencies
// initialize the router object
const router = require('express').Router();

// define routes

// Index
router.get('/', (req, res) => {
    res.render('articles/index.ejs');
});

// New
router.get('/new', (req, res) => {
    res.render('articles/new.ejs');
});

// export our router object
module.exports = router;