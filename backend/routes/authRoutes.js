const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {

    try {

        console.log(req.body);

        const { name, email, password } = req.body;

        const hashedPassword =
        await bcrypt.hash(password, 10);

        const user = new User({

            name,
            email,
            password: hashedPassword
        });

        await user.save();


        // SEND WELCOME EMAIL

        await sendEmail(

            email,

            "Welcome to Pet Care System",

            `Hello ${name},

Welcome to Smart Pet Care System 🐶

Your account has been created successfully.`
        );


        res.json({

            success: true,

            message: "User Registered"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({ message: "Invalid Password" });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET
        );

        res.json({
            token,
            user
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;