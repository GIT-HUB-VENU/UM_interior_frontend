import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaImages } from "react-icons/fa";
import "./Subgallery.css";

const API_URL = import.meta.env.VITE_API_URL;

function Subgallery() {
    const { name } = useParams();
    const [interiors, setInteriors] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSubgallery();
    }, [name]);

    const fetchSubgallery = async () => {
        try {
            const res = await axios.get(`${API_URL}/interiorstore`);

            // filter interiors by name
            const filtered = res.data.filter(
                (item) => item.name === name
            );

            setInteriors(filtered);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="subgallery">
            <h2 className="subgallery-header"><FaImages className="title-icon" />{name} Interiors</h2>

            <div className="subgallery-grid">
                {loading ? (
                    <p>Loading interiors...</p>
                ) : interiors.length > 0 ? (
                    interiors.map((item) => (
                        <div className="sub-card" key={item._id}>
                            <img
                                src={`${API_URL}${item.image}`}
                                alt={item.name}
                                onClick={() =>
                                    setSelectedImage(`${API_URL}${item.image}`)
                                }
                            />
                            <h3>{item.name}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))
                ) : (
                    <p>No interiors found</p>
                )}
            </div>

            {/* Fullscreen Image */}
            {selectedImage && (
                <div
                    className="lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <span className="close-btn">&times;</span>

                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}

export default Subgallery;