import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Medicines({darkMode, toggleTheme}) {

    const [medicines, setMedicines]
    = useState([]);

    const [search, setSearch]
    = useState("");


    useEffect(() => {

        fetchMedicines();

    }, []);


    const fetchMedicines = async () => {

        const res = await axios.get(
            "http://localhost:5000/api/medicines"
        );

        setMedicines(res.data);
    };


    const deleteMedicine = async (id) => {

        await axios.delete(
            `http://localhost:5000/api/medicines/${id}`
        );

        fetchMedicines();
    };


    const filteredMedicines =
    medicines.filter((medicine) =>

        medicine.medicineName
        .toLowerCase()
        .includes(search.toLowerCase())
    );


    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar darkMode={darkMode}
   toggleTheme={toggleTheme}/>

                <div className="container mt-4">

                    <div className="d-flex justify-content-between mb-4">

                        <h2>Medicines</h2>

                        <a
                            href="/add-medicine"

                            className="btn btn-custom"
                        >
                            Add Medicine
                        </a>

                    </div>


                    <input
                        type="text"

                        placeholder="Search Medicine"

                        className="form-control mb-4"

                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />


                    <div className="row">

                        {
                            filteredMedicines.map(
                                (medicine) => (

                                <div
                                    className="col-md-4 mb-4"

                                    key={medicine._id}
                                >

                                    <div className="custom-card p-3">

                                        <h3>
                                            {medicine.medicineName}
                                        </h3>

                                        <p>
                                            <strong>
                                                Description:
                                            </strong>

                                            {" "}

                                            {medicine.description}
                                        </p>

                                        <p>
                                            <strong>
                                                Usage:
                                            </strong>

                                            {" "}

                                            {medicine.usage}
                                        </p>

                                        <p>
                                            <strong>
                                                Side Effects:
                                            </strong>

                                            {" "}

                                            {medicine.sideEffects}
                                        </p>

                                        <button
                                            className="btn btn-danger"

                                            onClick={() =>
                                                deleteMedicine(
                                                    medicine._id
                                                )
                                            }
                                        >
                                            Delete
                                        </button>

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

export default Medicines;