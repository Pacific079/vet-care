import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = async () => {

        try{

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                { email, password }
            );

            localStorage.setItem("token", res.data.token);

            window.location.href = "/dashboard";

        }catch(err){
            alert("Login Failed");
        }
    };

    return (

        <div className="auth-container">

            <div className="auth-box">

                <h2 className="text-center mb-4">
                    Pet Care Login
                </h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    className="form-control mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control mb-3"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="btn btn-custom w-100"
                    onClick={loginUser}
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;