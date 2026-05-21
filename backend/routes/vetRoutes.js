const express = require("express");

const router = express.Router();

const Vet = require("../models/Vet");


// ADD VET

router.post("/add", async (req, res) => {

    try {

        const vet = new Vet(req.body);

        await vet.save();

        res.json({
            success: true,
            message: "Vet Added"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// GET ALL VETS

router.get("/", async (req, res) => {

    try {

        const vets = await Vet.find();

        res.json(vets);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE VET

router.delete("/:id", async (req, res) => {

    try {

        await Vet.findByIdAndDelete(
            req.params.id
        );

        res.json({
            success: true,
            message: "Vet Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;