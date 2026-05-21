require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const petRoutes = require("./routes/petRoutes");
const authRoutes = require("./routes/authRoutes");
const diseaseRoutes = require("./routes/diseaseRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const vetRoutes = require("./routes/vetRoutes");
const chatRoutes = require("./routes/chatRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const vaccinationRoutes = require("./routes/vaccinationRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/pets", petRoutes);
app.use("/api/disease", diseaseRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/vets", vetRoutes);
app.use("/uploads",express.static("uploads"));
app.use("/api/chat", chatRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/vaccinations",vaccinationRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API Running");
});

app.get("/test-ai", async (req, res) => {

    try {

        const response =
        await ai.models.generateContent({

            model: "gemini-1.5-flash",

            contents: "Hello"
        });

        res.send(response.text);

    } catch (error) {

        console.log(error);

        res.send(error.message);
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});