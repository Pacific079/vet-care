import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddPet({
    darkMode,
    toggleTheme
}) {

    const [petName, setPetName]
    = useState("");

    const [breed, setBreed]
    = useState("");

    const [age, setAge]
    = useState("");

    const [history, setHistory]
    = useState("");

    const [image, setImage]
    = useState(null);


    const addPet = async () => {

        try {

            const formData = new FormData();

            formData.append("petName", petName);

            formData.append("breed", breed);

            formData.append("age", age);

            formData.append("history", history);

            formData.append("image", image);


            await axios.post(

                "http://localhost:5000/api/pets/add",

                formData,

                {
                    headers: {
                        "Content-Type":
                        "multipart/form-data"
                    }
                }
            );

            alert("Pet Added");

            window.location.href = "/pets";

        } catch (error) {

            console.log(error);

            alert("Error Adding Pet");
        }
    };


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />

                <div className="container mt-4">

                    <div className="custom-card p-4">

                        <h2 className="mb-4">
                            Add Pet
                        </h2>

                        <input
                            type="text"

                            placeholder="Pet Name"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setPetName(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="text"

                            placeholder="Breed"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setBreed(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="number"

                            placeholder="Age"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setAge(
                                    e.target.value
                                )
                            }
                        />

                        <textarea
                            placeholder="Medical History"

                            className="form-control mb-3"

                            rows="4"

                            onChange={(e) =>
                                setHistory(
                                    e.target.value
                                )
                            }
                        />

                        <input
                            type="file"

                            className="form-control mb-3"

                            onChange={(e) =>
                                setImage(
                                    e.target.files[0]
                                )
                            }
                        />

                        <button
                            className="btn btn-custom"

                            onClick={addPet}
                        >
                            Add Pet
                        </button>

                    </div>

                </div>

            </div>

        </>
    );
}

export default AddPet;