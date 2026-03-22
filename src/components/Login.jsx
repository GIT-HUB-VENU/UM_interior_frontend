import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons
import "./Login.css";

function Login() {
    const { setUser } = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const API_URL = import.meta.env.VITE_API_URL;
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (!email || !password) {
                setError("Please enter both email and password");
                return;
            }

            const url = `${API_URL}/auth/signin`;
            const response = await axios.post(url, { email, password });

            setUser(response.data);
            navigate("/");
        } catch (err) {
            console.error("Login failed:", err);
            setError(err.response?.data?.message || "Login failed. Please try again.");
        }
    };

    const handleAdminLogin = () => {
        window.location.href = `${API_URL}/login`;
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h2 className="login-title">User Login</h2>

                {error && <p className="login-error">{error}</p>}

                {/* Email Input with icon */}
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

                {/* Password Input with icon */}
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

                <button onClick={handleLogin} className="login-btn">
                    User Login
                </button>

                <button onClick={handleAdminLogin} className="login-btn admin-btn">
                    Admin Login
                </button>

                <p className="login-register">
                    New user? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;