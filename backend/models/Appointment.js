const mongoose = require("mongoose");

const appointmentSchema =
new mongoose.Schema({

    userEmail: {
        type: String,
        required: true
    },

    petName: {
        type: String,
        required: true
    },

    vetName: {
        type: String,
        required: true
    },

    appointmentDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model(
    "Appointment",
    appointmentSchema
);