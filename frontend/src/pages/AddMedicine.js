import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddMedicine({darkMode, toggleTheme}) {

    const [medicine, setMedicine] = useState({

        medicineName: "",

        description: "",

        usage: "",

        sideEffects: ""
    });


    const addMedicine = async () => {

        try {

            await axios.post(

                "http://localhost:5000/api/medicines/add",

                medicine
            );

            alert("Medicine Added");

            window.location.href =
                "/medicines";

        } catch (error) {

            alert("Error Adding Medicine");
        }
    };


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar darkMode={darkMode}
                    toggleTheme={toggleTheme} />

                <div className="container mt-4">

                    <div className="custom-card p-4">

                        <h2 className="mb-4">
                            Add Medicine
                        </h2>

                        <input
                            type="text"
                            placeholder="Medicine Name"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setMedicine({
                                    ...medicine,
                                    medicineName:
                                        e.target.value
                                })
                            }
                        />

                        <textarea
                            placeholder="Description"

                            className="form-control mb-3"

                            rows="3"

                            onChange={(e) =>
                                setMedicine({
                                    ...medicine,
                                    description:
                                        e.target.value
                                })
                            }
                        />

                        <textarea
                            placeholder="Usage Instructions"

                            className="form-control mb-3"

                            rows="3"

                            onChange={(e) =>
                                setMedicine({
                                    ...medicine,
                                    usage:
                                        e.target.value
                                })
                            }
                        />

                        <textarea
                            placeholder="Side Effects"

                            className="form-control mb-3"

                            rows="3"

                            onChange={(e) =>
                                setMedicine({
                                    ...medicine,
                                    sideEffects:
                                        e.target.value
                                })
                            }
                        />

                        <button
                            className="btn btn-custom"

                            onClick={addMedicine}
                        >
                            Add Medicine
                        </button>

                    </div>

                </div>

            </div>

        </>
    );
}

export default AddMedicine;