import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Pets({ darkMode, toggleTheme }) {

    const [pets, setPets] = useState([]);

    useEffect(() => {

        fetchPets();

    }, []);

    const fetchPets = async () => {

        const res = await axios.get(
            "http://localhost:5000/api/pets"
        );

        setPets(res.data);
    };

    const deletePet = async (id) => {

        await axios.delete(
            `http://localhost:5000/api/pets/${id}`
        );

        fetchPets();
    };

    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar darkMode={darkMode}
                    toggleTheme={toggleTheme} />

                <div className="container mt-4">

                    <div className="d-flex justify-content-between mb-4">

                        <h2>All Pets</h2>

                        <a
                            href="/add-pet"
                            className="btn btn-custom"
                        >
                            Add Pet
                        </a>

                    </div>

                    <div className="row">

                        {
                            pets.map((pet) => (

                                <div className="col-md-4 mb-4" key={pet._id}>

                                    <div className="custom-card p-3">

                                        <h3>{pet.petName}</h3>
                                        <img
                                            src={`http://localhost:5000/uploads/${pet.image}`}

                                            alt="pet"

                                            className="pet-image mb-3"
                                        />

                                        <h3>
                                            {pet.petName}
                                        </h3>

                                        <p>
                                            Breed: {pet.breed}
                                        </p>

                                        <p>
                                            Age: {pet.age}
                                        </p>

                                        <p>
                                            {pet.history}
                                        </p>

                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                deletePet(pet._id)
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

export default Pets;