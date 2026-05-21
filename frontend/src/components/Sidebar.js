import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div className="sidebar p-3">

            <h4 className="mb-4 text-white">
                Dashboard
            </h4>

            <ul className="list-unstyled">

                <li>
                    <Link to="/dashboard" className="sidebar-link">
                        🏠 Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/pets" className="sidebar-link">
                        🐶 Pets
                    </Link>
                </li>

                <li>
                    <Link
                        to="/disease-checker"
                        className="sidebar-link"
                    >
                        🩺 Disease Checker
                    </Link>
                </li>

                <li>
                    <Link
                        to="/medicines"
                        className="sidebar-link"
                    >
                        💊 Medicines
                    </Link>
                </li>

                <li>
                    <Link
                        to="/vets"
                        className="sidebar-link"
                    >
                        👨‍⚕️ Veterinarians
                    </Link>
                </li>

                <li>

                    <Link
                        to="/reports"
                        className="sidebar-link"
                    >
                        📊 Reports
                    </Link>

                </li>

                <li>

                    <Link
                        to="/chatbot"
                        className="sidebar-link"
                    >
                        🤖 AI Assistant
                    </Link>

                </li>

                <li>

                    <Link
                        to="/appointment"
                        className="sidebar-link"
                    >
                        📅 appointment
                    </Link>

                </li>

                <li>

                    <Link
                        to="/vaccination"
                        className="sidebar-link"
                    >
                        🔔 Vaccination
                    </Link>

                </li>

            </ul>

        </div>
    );
}

export default Sidebar;