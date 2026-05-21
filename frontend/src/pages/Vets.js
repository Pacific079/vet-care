import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Vets({ darkMode, toggleTheme }) {

    const [vets, setVets]
        = useState([]);


    useEffect(() => {

        fetchVets();

    }, []);


    const fetchVets = async () => {

        const res = await axios.get(
            "http://localhost:5000/api/vets"
        );

        setVets(res.data);
    };


    const deleteVet = async (id) => {

        await axios.delete(
            `http://localhost:5000/api/vets/${id}`
        );

        fetchVets();
    };


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar darkMode={darkMode}
                    toggleTheme={toggleTheme} />

                <div className="container mt-4">

                    <div className="d-flex justify-content-between mb-4">

                        <h2>Veterinarians</h2>

                        <a
                            href="/add-vet"

                            className="btn btn-custom"
                        >
                            Add Vet
                        </a>

                    </div>


                    <div className="row">

                        {
                            vets.map((vet) => (

                                <div
                                    className="col-md-4 mb-4"

                                    key={vet._id}
                                >

                                    <div className="custom-card p-4">

                                        <h3>
                                            👨‍⚕️ {vet.vetName}
                                        </h3>

                                        <p>
                                            <strong>
                                                Specialization:
                                            </strong>

                                            {" "}

                                            {vet.specialization}
                                        </p>

                                        <p>
                                            <strong>
                                                Phone:
                                            </strong>

                                            {" "}

                                            {vet.phone}
                                        </p>

                                        <p>
                                            <strong>
                                                Email:
                                            </strong>

                                            {" "}

                                            {vet.email}
                                        </p>

                                        <p>
                                            <strong>
                                                Address:
                                            </strong>

                                            {" "}

                                            {vet.address}
                                        </p>

                                        <div className="d-flex gap-2">

                                            <a
                                                href={`tel:${vet.phone}`}

                                                className="btn btn-success"
                                            >
                                                Call
                                            </a>

                                            <button
                                                className="btn btn-danger"

                                                onClick={() =>
                                                    deleteVet(
                                                        vet._id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>

        </>
    );
}

export default Vets;