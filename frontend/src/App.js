import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Pets from "./pages/Pets";
import AddPet from "./pages/AddPet";
import DiseaseChecker from "./pages/DiseaseChecker";
import Medicines from "./pages/Medicines";
import AddMedicine from "./pages/AddMedicine";
import Vets from "./pages/Vets";
import AddVet from "./pages/AddVet";
import Chatbot from "./pages/Chatbot";
import Appointment from "./pages/Appointment";
import Vaccination from "./pages/Vaccination";
import Reports from "./pages/Reports";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const [darkMode, setDarkMode]
  = useState(false);


  useEffect(() => {

    const savedTheme =
    localStorage.getItem("theme");

    if (savedTheme === "dark") {

      setDarkMode(true);

      document.body.classList.add("dark-mode");
    }

  }, []);


  const toggleTheme = () => {

    setDarkMode(!darkMode);

    if (!darkMode) {

      document.body.classList.add("dark-mode");

      localStorage.setItem("theme", "dark");

    } else {

      document.body.classList.remove("dark-mode");

      localStorage.setItem("theme", "light");
    }
  };


  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Login
              darkMode={darkMode}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              darkMode={darkMode}
              toggleTheme={toggleTheme}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/pets"
          element={
            <ProtectedRoute>

              <Pets
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/add-pet"
          element={
            <ProtectedRoute>

              <AddPet
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/disease-checker"
          element={
            <ProtectedRoute>

              <DiseaseChecker
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/medicines"
          element={
            <ProtectedRoute>

              <Medicines
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/add-medicine"
          element={
            <ProtectedRoute>

              <AddMedicine
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/vets"
          element={
            <ProtectedRoute>

              <Vets
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/add-vet"
          element={
            <ProtectedRoute>

              <AddVet
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />

            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>

          <Reports
              darkMode={darkMode}
              toggleTheme={toggleTheme}
          />

            </ProtectedRoute>
            }
          />

          <Route
            path="/chatbot"
            element={
                <ProtectedRoute>

                  <Chatbot
                      darkMode={darkMode}
                      toggleTheme={toggleTheme}
                  />

                </ProtectedRoute>
            }
          />
          
          <Route
            path="/appointment"
            element={<Appointment />}
          />

          <Route
            path="/vaccination"
            element={<Vaccination />}
          />

      </Routes>

    </BrowserRouter>
  );
}

export default App;