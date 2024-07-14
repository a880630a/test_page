import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={navigate("/")}>返回主頁</button>
        </div>
    );
};

export default NavBar;
