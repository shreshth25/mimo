import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../slices/authSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			let res = await axios.post("http://127.0.0.1:5000/auth/login", { email, password });
			console.log(res);
			if (res.status === 200) {
				toast.success("login successful");
				let data = res.data.data;
				dispatch(saveUser(data));
			}
		} catch (e) {
			console.log(e);
			toast.error(e.response?.data?.message || "Server Down");
		}
	};
	return (
		<div
			className="d-flex justify-content-center align-items-center min-vh-100"
		>
			<div className="card p-4 shadow w-100" style={{ maxWidth: "600px", width: "400px" }}>
				<h3 className="text-center mb-4 text-muted">
					Create a account with <span style={{ color: "green" }}>MIMO</span>
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter your password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="text-center">
						<button type="submit" className="btn btn-small btn-outline-secondary w-25">
							Sign In
						</button>
					</div>

					<div className="text-center mt-4">
						<h6 className="text-muted">
							Don't have a account ? <NavLink to={"/register"}>Sign Up</NavLink>
						</h6>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
