const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({

    vetName: String,

    specialization: String,

    phone: String,

    email: String,

    address: String
});

module.exports = mongoose.model(
    "Vet",
    vetSchema
);