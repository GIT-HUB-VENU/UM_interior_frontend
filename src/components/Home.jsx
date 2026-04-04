import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaPaintBrush, FaCouch } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Home() {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        toast.success("Please Wait ! Images Loading....");
    }, []);

    return (
        <div className="home-container">
            <img
                src={`${API_URL}/images/profile.jpeg`}
                alt="Profile"
                className="home-img"
            />

            <h1>U.M Interiors</h1>

            <p className="home-desc">
                We create elegant and modern interior designs that transform your space into a beautiful living experience.
            </p>

            <p className="home-desc">
                Discover unique styles from our creations
            </p>

            <button
                className="gallery-btn"
                onClick={() => navigate("/gallery")}
            >
                <MdExplore className="btn-icon" />
                Explore Our Gallery
            </button>
        </div>
    );
}

export default Home;