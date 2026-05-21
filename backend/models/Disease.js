const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema({

    symptoms: [String],

    diseaseName: String,

    precautions: String,

    medicines: [String]
});

module.exports = mongoose.model(
    "Disease",
    diseaseSchema
);