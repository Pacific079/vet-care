import { useState } from "react";

import axios from "axios";

function Appointment() {

    const [formData, setFormData]
    = useState({

        userEmail: "",
        petName: "",
        vetName: "",
        appointmentDate: ""
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

                "http://localhost:5000/api/appointments",

                formData
            );

            alert(
                "Appointment Booked!"
            );

        } catch (error) {

            console.log(error);
        }
    };


    return (

        <div className="container mt-5">

            <h2>
                📅 Book Appointment
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
                    name="vetName"
                    placeholder="Vet Name"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="date"
                    name="appointmentDate"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <button
                    className="btn btn-primary"
                >
                    Book Appointment
                </button>

            </form>

        </div>
    );
}

export default Appointment;