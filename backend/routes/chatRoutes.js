const express = require("express");

const router = express.Router();

const {
    GoogleGenerativeAI
} = require("@google/generative-ai");


console.log(
    "Gemini Key:",
    process.env.GEMINI_API_KEY
);


const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);


router.post("/", async (req, res) => {

    try {

        const { message } = req.body;

        if (!message) {

            return res.status(400).json({
                message: "Message required"
            });
        }


        const model =
        genAI.getGenerativeModel({

            model: "gemini-1.5-flash"
        });


        const result =
        await model.generateContent(message);


        const response =
        await result.response;

        const text =
        response.text();


        res.json({

            reply: text
        });

    } catch (error) {

        console.log("FULL GEMINI ERROR:");

        console.log(error);

        res.status(500).json({

            message: error.message
        });
    }
});

module.exports = router;