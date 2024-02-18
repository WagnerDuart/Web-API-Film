const mongoose = require('mongoose')

const Film = mongoose.model('Film',{
    title: String,
    description: String,
    image_url: String,
    genre: String,
});

module.exports = Film