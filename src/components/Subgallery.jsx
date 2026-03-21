import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Subgallery.css";

const API_URL = import.meta.env.VITE_API_URL;

function Subgallery() {
    const { name } = useParams(); // get name from URL
    const [interiors, setInteriors] = useState([]);

    useEffect(() => {
        fetchSubgallery();
    }, [name]);

    const fetchSubgallery = async () => {
        try {
            const res = await axios.get(`${API_URL}/interiorstore`);

            // filter same name interiors
            const filtered = res.data.filter(
                (item) => item.name === name
            );

            setInteriors(filtered);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="subgallery">
            <h2>{name} Designs</h2>

            <div className="subgallery-grid">
                {interiors.length > 0 ? (
                    interiors.map((item) => (
                        <div className="sub-card" key={item._id}>
                            <img src={`${API_URL}${item.image}`} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>₹{item.price}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))
                ) : (
                    <p>No designs found</p>
                )}
            </div>
        </div>
    );
}

export default Subgallery;