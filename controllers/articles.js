// dependencies
// initialize the router object
const router = require('express').Router();

// define routes
router.get('/', (req, res) => {
    res.render('articles/index.ejs');
});

// export our router object
module.exports = router;