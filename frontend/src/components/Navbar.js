function Navbar({ darkMode, toggleTheme }) {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    return (

        <nav className="navbar navbar-dark px-4">

            <h3 className="navbar-brand">
                🐾 Pet Care System
            </h3>

            <div className="d-flex gap-3">

                <button
                    className="btn btn-warning"
                    onClick={toggleTheme}
                >
                    {
                        darkMode
                        ? "☀️ Light"
                        : "🌙 Dark"
                    }
                </button>

                <button
                    className="btn btn-light"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;