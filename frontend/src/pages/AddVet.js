import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddVet({ darkMode, toggleTheme }) {

    const [vet, setVet] = useState({

        vetName: "",

        specialization: "",

        phone: "",

        email: "",

        address: ""
    });


    const addVet = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/vets/add",

                vet
            );

            alert("Vet Added");

            window.location.href = "/vets";

        } catch (error) {

            alert("Error Adding Vet");
        }
    };


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar
                    darkMode={darkMode}
                    toggleTheme={toggleTheme} />

                <div className="container mt-4">

                    <div className="custom-card p-4">

                        <h2 className="mb-4">
                            Add Veterinarian
                        </h2>

                        <input
                            type="text"

                            placeholder="Vet Name"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setVet({
                                    ...vet,
                                    vetName: e.target.value
                                })
                            }
                        />

                        <input
                            type="text"

                            placeholder="Specialization"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setVet({
                                    ...vet,
                                    specialization:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="text"

                            placeholder="Phone Number"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setVet({
                                    ...vet,
                                    phone:
                                        e.target.value
                                })
                            }
                        />

                        <input
                            type="email"

                            placeholder="Email"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setVet({
                                    ...vet,
                                    email:
                                        e.target.value
                                })
                            }
                        />

                        <textarea
                            placeholder="Clinic Address"

                            className="form-control mb-3"

                            rows="3"

                            onChange={(e) =>
                                setVet({
                                    ...vet,
                                    address:
                                        e.target.value
                                })
                            }
                        />

                        <button
                            className="btn btn-custom"

                            onClick={addVet}
                        >
                            Add Vet
                        </button>

                    </div>

                </div>

            </div>

        </>
    );
}

export default AddVet;