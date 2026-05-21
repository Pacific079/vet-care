const express = require("express");

const Pet = require("../models/Pet");

const router = express.Router();

const upload = require("../middleware/upload");


// ADD PET
router.post(

    "/add",

    upload.single("image"),

    async (req, res) => {

        try {

            const pet = new Pet({

                petName: req.body.petName,

                breed: req.body.breed,

                age: req.body.age,

                history: req.body.history,

                image: req.file
                    ? req.file.filename
                    : ""
            });

            await pet.save();

            res.json({
                success: true,
                message: "Pet Added"
            });

        } catch (error) {

            res.status(500).json({
                message: error.message
            });
        }
    }
);


// GET ALL PETS
router.get("/", async (req, res) => {

    try {

        const pets = await Pet.find();

        res.json(pets);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// DELETE PET
router.delete("/:id", async (req, res) => {

    try {

        await Pet.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Pet Deleted"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;