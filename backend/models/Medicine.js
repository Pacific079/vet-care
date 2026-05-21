const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({

    medicineName: String,

    description: String,

    usage: String,

    sideEffects: String
});

module.exports = mongoose.model(
    "Medicine",
    medicineSchema
);