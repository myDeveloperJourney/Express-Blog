// require dependencies
const mongoose = require('mongoose');
// initialize shortcut variable
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number
});

// initialize schema
const articleSchema = new Schema({
    title: String,
    body: String,
    authoredBy: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    reviews: [reviewSchema]
});

// export our model
module.exports = mongoose.model('Article', articleSchema);


// ^-- this code takes a schema and turns it into a model
// this will provide us with a bunch of special methods
/*
    These model methods allow us to perform crud on a specific collection in a database
    
    Model.find()
    Model.create()
    Model.findById()
    Model.findByIdUpdate()
    Model.findByIdDelete()
*/