const mongoose = require("mongoose");

const vaccinationSchema =
new mongoose.Schema({

    userEmail: {
        type: String,
        required: true
    },

    petName: {
        type: String,
        required: true
    },

    vaccineName: {
        type: String,
        required: true
    },

    vaccinationDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "Vaccination",
    vaccinationSchema
);