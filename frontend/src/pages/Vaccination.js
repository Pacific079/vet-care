import { useState } from "react";

import axios from "axios";

function Vaccination() {

    const [formData, setFormData]
    = useState({

        userEmail: "",
        petName: "",
        vaccineName: "",
        vaccinationDate: ""
    });


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value
        });
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/vaccinations",

                formData
            );

            alert(
                "Vaccination Reminder Added!"
            );

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div className="container mt-5">

            <h2>
                🔔 Vaccination Reminder
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="userEmail"
                    placeholder="Email"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="petName"
                    placeholder="Pet Name"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="vaccineName"
                    placeholder="Vaccine Name"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="vaccinationDate"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <button
                    className="btn btn-success"
                >
                    Add Reminder
                </button>

            </form>

        </div>
    );
}

export default Vaccination;