import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;


    return (<div className="home-container">


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
            Discover unique styles From our creations
        </p>

        <button
            className="gallery-btn"
            onClick={() => navigate("/gallery")}
        >
            Explore Our Gallery
        </button>
    </div>
    );
}

export default Home;