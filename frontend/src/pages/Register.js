import { useState } from "react";
import axios from "axios";

function Register() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const registerUser = async () => {

        try{

            await axios.post(
                "http://localhost:5000/api/auth/register",
                formData
            );

            alert("Registered Successfully");

            window.location.href = "/";

        }catch(err){
            alert("Registration Failed");
        }
    };

    return (

        <div className="auth-container">

            <div className="auth-box">

                <h2 className="text-center mb-4">
                    Create Account
                </h2>

                <input
                    type="text"
                    placeholder="Name"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-3"
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }
                />

                <button
                    className="btn btn-custom w-100"
                    onClick={registerUser}
                >
                    Register
                </button>

            </div>

        </div>
    );
}

export default Register;