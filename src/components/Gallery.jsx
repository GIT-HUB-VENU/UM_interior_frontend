import { useState, useEffect } from "react";
import "./Gallery.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaImages, FaArrowRight } from "react-icons/fa";

const API_URL = import.meta.env.VITE_API_URL;

function Gallery() {
  const [interiors, setInteriors] = useState([]);
  const navigate = useNavigate();

  const fetchInteriors = async () => {
    const url = `${API_URL}/interiorstore`;
    const res = await axios.get(url);
    setInteriors(res.data);
  };

  useEffect(() => {
    fetchInteriors();
  }, []);



  const uniqueInteriors = Array.from(
    new Map(interiors.map(item => [item.name, item])).values()
  );

  const handleMore = (name) => {
    navigate(`/subgallery/${name}`);
  };

  return (
    <div className="gallery-container">
      <h3 className="gallery-title">
        <FaImages className="title-icon" /> Interiors Gallery
      </h3>

      <div className="gallery-grid">
        {uniqueInteriors.map((interior) => (
          <div className="interior-card" key={interior._id}>
            <img
              src={`${API_URL}/${interior.image}`}
              alt={interior.name}
            />

            <div className="card-content">
              <div className="card-title">
                {interior.name}s
              </div>

              <button
                className="more-btn"
                onClick={() => handleMore(interior.name)}
              >
                More <FaArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;