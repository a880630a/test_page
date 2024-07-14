import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1> 乾貨聚集地</h1>
            <h2>slow component </h2>
            <button onClick={() => navigate("/slow-component")}>
                slow component
            </button>
            <button onClick={() => navigate("/slow-component-button-isolate")}>
                slow component button isolate
            </button>
            <button onClick={() => navigate("/slow-component-fixed")}>
                slow component fixed
            </button>
        </div>
    );
};

export default Home;
