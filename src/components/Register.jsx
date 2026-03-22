import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Icons
import "./Login.css"; // Reuse the same CSS for consistency

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            if (!name || !email || !password) {
                setError("Please fill in all fields");
                return;
            }

            const url = `${API_URL}/auth/signup`;
            const response = await axios.post(url, { name, email, password });

            console.log("Registration successful:", response.data);
            navigate("/login");
        } catch (err) {
            console.error("Registration failed:", err);
            setError(err.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2 className="login-title">User Registration</h2>

                {error && <p className="login-error">{error}</p>}

                {/* Name Input */}
                <div className="input-wrapper">
                    <FaUser className="input-icon" />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="login-input"
                    />
                </div>

                {/* Email Input */}
                <div className="input-wrapper">
                    <FaEnvelope className="input-icon" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="login-input"
                    />
                </div>

                {/* Password Input */}
                <div className="input-wrapper">
                    <FaLock className="input-icon" />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="login-input"
                    />
                </div>

                <button onClick={handleRegister} className="login-btn">
                    Register
                </button>

                <p className="login-register">
                    Already a member? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;