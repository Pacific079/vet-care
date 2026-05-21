const express = require("express");

const router = express.Router();


// SIMPLE RULE-BASED AI

router.post("/check", async (req, res) => {

    try {

        const { symptoms } = req.body;

        let result = {};

        // FOOD POISONING

        if (
            symptoms.includes("vomiting") &&
            symptoms.includes("weakness")
        ) {

            result = {
                disease: "Food Poisoning",
                precautions:
                    "Give clean water and light food",

                medicines: [
                    "ORS",
                    "Digestive Syrup"
                ]
            };
        }

        // FEVER

        else if (
            symptoms.includes("fever")
        ) {

            result = {
                disease: "Viral Fever",
                precautions:
                    "Provide rest and hydration",

                medicines: [
                    "Paracetamol",
                    "Pet Fever Syrup"
                ]
            };
        }

        // HAIR LOSS

        else if (
            symptoms.includes("hair loss")
        ) {

            result = {
                disease: "Skin Infection",
                precautions:
                    "Keep skin clean and visit vet",

                medicines: [
                    "Antifungal Shampoo"
                ]
            };
        }

        // DEFAULT

        else {

            result = {
                disease: "Unknown Disease",
                precautions:
                    "Consult veterinarian",

                medicines: []
            };
        }

        res.json(result);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;