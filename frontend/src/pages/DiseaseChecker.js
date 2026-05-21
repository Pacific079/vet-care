import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function DiseaseChecker({ darkMode, toggleTheme }) {

    const [selectedSymptoms, setSelectedSymptoms]
        = useState([]);

    const [result, setResult] = useState(null);


    const symptomsList = [

        "vomiting",
        "fever",
        "hair loss",
        "weakness",
        "loss of appetite"
    ];


    const handleCheckbox = (symptom) => {

        if (
            selectedSymptoms.includes(symptom)
        ) {

            setSelectedSymptoms(

                selectedSymptoms.filter(
                    item => item !== symptom
                )
            );

        } else {

            setSelectedSymptoms([
                ...selectedSymptoms,
                symptom
            ]);
        }
    };


    const checkDisease = async () => {

        try {

            const res = await axios.post(

                "http://localhost:5000/api/disease/check",

                {
                    symptoms: selectedSymptoms
                }
            );

            setResult(res.data);

        } catch (error) {

            alert("Error checking disease");
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
                            Disease Checker
                        </h2>

                        <div className="row">

                            {
                                symptomsList.map(
                                    (symptom, index) => (

                                        <div
                                            className="col-md-4 mb-3"
                                            key={index}
                                        >

                                            <div className="form-check">

                                                <input
                                                    type="checkbox"

                                                    className="form-check-input"

                                                    onChange={() =>
                                                        handleCheckbox(
                                                            symptom
                                                        )
                                                    }
                                                />

                                                <label
                                                    className="form-check-label"
                                                >
                                                    {symptom}
                                                </label>

                                            </div>

                                        </div>
                                    ))
                            }

                        </div>

                        <button
                            className="btn btn-custom mt-3"
                            onClick={checkDisease}
                        >
                            Check Disease
                        </button>


                        {
                            result && (

                                <div className="mt-4">

                                    <div className="alert alert-info">

                                        <h4>
                                            Disease:
                                            {" "}
                                            {result.disease}
                                        </h4>

                                        <p>
                                            <strong>
                                                Precautions:
                                            </strong>

                                            {" "}

                                            {result.precautions}
                                        </p>

                                        <p>

                                            <strong>
                                                Medicines:
                                            </strong>

                                            {" "}

                                            {
                                                result.medicines.join(", ")
                                            }

                                        </p>

                                    </div>

                                </div>
                            )
                        }

                    </div>

                </div>

            </div>

        </>
    );
}

export default DiseaseChecker;