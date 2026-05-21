import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    PieChart,
    Pie
} from "recharts";

import { useEffect, useState } from "react";

import axios from "axios";

function Reports() {

    const [pets, setPets] = useState([]);
    const [medicines, setMedicines] = useState([]);
    const [vets, setVets] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const petRes = await axios.get(
                "http://localhost:5000/api/pets"
            );

            const medicineRes = await axios.get(
                "http://localhost:5000/api/medicines"
            );

            const vetRes = await axios.get(
                "http://localhost:5000/api/vets"
            );

            setPets(petRes.data);
            setMedicines(medicineRes.data);
            setVets(vetRes.data);

        } catch (error) {

            console.log(error);
        }
    };

    const data = [

        {
            name: "Pets",
            total: pets.length
        },

        {
            name: "Medicines",
            total: medicines.length
        },

        {
            name: "Vets",
            total: vets.length
        }
    ];

    return (

        <div className="container mt-5">

            <h2 className="mb-4">
                Reports Dashboard
            </h2>

            <BarChart
                width={600}
                height={300}
                data={data}
            >

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                    dataKey="total"
                    fill="#1e3a5f"
                />

            </BarChart>

            <br />

            <PieChart width={400} height={400}>

                <Pie
                    data={data}
                    dataKey="total"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    label
                />

            </PieChart>

        </div>
    );
}

export default Reports;