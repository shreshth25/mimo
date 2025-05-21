import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate()

    const handleClick = () => {
    navigate("/home");
    };

	return (
		<div>
			<div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
				<h1 className="text-white">MIMO</h1>
				<h3 className="text-white">Welcome to the world of MIMO</h3>
				<button className="btn btn-outline-primary text-white" onClick={handleClick}>Get Started</button>
			</div>
		</div>
	);
};

export default Landing;
