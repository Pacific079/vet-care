import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard( {darkMode, toggleTheme}) {

    return (

        <>
            <Sidebar />

            <div className="main-content">

                <Navbar
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />

                <div className="container mt-4">

                    <h1 className="dashboard-title mb-4">
                        Pet Care Dashboard
                    </h1>

                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>🐶 Pet Profiles</h3>

                                <p>
                                    Manage all pet details and history.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>🩺 Disease Checker</h3>

                                <p>
                                    Predict diseases using symptoms.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>💊 Medicines</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>👨‍⚕️ Veterinarians</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>📊 Reports</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>🤖 AI Assistant</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>📅 Appointment</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>🔔 Vaccination</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>⏳ coming soon</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>⏳ coming soon</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>⏳ coming soon</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="custom-card p-4">

                                <h3>⏳ coming soon</h3>

                                <p>
                                    Search medicines and instructions.
                                </p>

                            </div>

                        </div>
                        
                        

                    </div>

                </div>

            </div>
        </>
    );
}

export default Dashboard;