const mongoose = require('mongoose');

// Define the schema for the Cafe model

const cafeSchema = mongoose.Schema({
    cafeId: { type: String, required: true, unique: true },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cafe', cafeSchema, 'cafes');