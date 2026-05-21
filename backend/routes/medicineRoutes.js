const express = require("express");

const router = express.Router();

const Medicine = require("../models/Medicine");


// ADD MEDICINE

router.post("/add", async (req, res) => {

    try {

        const medicine = new Medicine(req.body);

        await medicine.save();

        res.json({
            success: true,
            message: "Medicine Added"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// GET ALL MEDICINES

router.get("/", async (req, res) => {

    try {

        const medicines = await Medicine.find();

        res.json(medicines);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE MEDICINE

router.delete("/:id", async (req, res) => {

    try {

        await Medicine.findByIdAndDelete(
            req.params.id
        );

        res.json({
            success: true,
            message: "Medicine Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;