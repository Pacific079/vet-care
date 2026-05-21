const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({

    petName: String,

    breed: String,

    age: Number,

    history: String,

    image: String
});

module.exports = mongoose.model(
    "Pet",
    petSchema
);