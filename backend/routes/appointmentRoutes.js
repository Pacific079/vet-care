const express = require("express");

const router = express.Router();

const Appointment =
require("../models/Appointment");

const sendEmail =
require("../utils/sendEmail");


router.post("/", async (req, res) => {

    try {

        const {

            userEmail,
            petName,
            vetName,
            appointmentDate

        } = req.body;


        const appointment =
        new Appointment({

            userEmail,
            petName,
            vetName,
            appointmentDate
        });


        await appointment.save();


        // SEND EMAIL

        await sendEmail(

            userEmail,

            "Appointment Confirmation",

            `Your appointment with Dr. ${vetName}
             is booked for ${appointmentDate}.`
        );


        res.json({

            success: true,

            message: "Appointment Booked"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
});


module.exports = router;