const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrepreneurSchema = new Schema({
    title: {
        type: String,
        requierd: true
    },
    // thumbnail: {

    // },
    views: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    // date: {
    //     type: String,
    // }
    category: [
        {
            type: String,
        }
    ],
});



module.exports = mongoose.model('Entrepreneur', EntrepreneurSchema);