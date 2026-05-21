const express = require("express");

const router = express.Router();

const Vaccination =
require("../models/Vaccination");

const sendEmail =
require("../utils/sendEmail");


// ADD VACCINATION

router.post("/", async (req, res) => {

    try {

        const {

            userEmail,
            petName,
            vaccineName,
            vaccinationDate

        } = req.body;


        const vaccination =
        new Vaccination({

            userEmail,
            petName,
            vaccineName,
            vaccinationDate
        });


        await vaccination.save();


        // SEND EMAIL

        await sendEmail(

            userEmail,

            "Vaccination Reminder Added",

            `Vaccination reminder for ${petName}
             has been added successfully.`
        );


        res.json({

            success: true,

            message: "Vaccination Added"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
});


// GET ALL

router.get("/", async (req, res) => {

    try {

        const vaccinations =
        await Vaccination.find();

        res.json(vaccinations);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false
        });
    }
});

module.exports = router;