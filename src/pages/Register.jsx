import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../slices/authSlice";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			let res = await axios.post("http://127.0.0.1:5000/auth/register", { name, email, password });
			if (res.status === 200) {
				toast.success('Register Successful')
				let data = {
					'profile': res.data.data,
					'token': res.data.data.token
				}
				dispatch(saveUser(data));
			}
		} catch (e) {
			console.log(e);
			toast.error(e.response?.data?.message || "Server Down")
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
					<div className="row"></div>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							placeholder="Enter your full name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
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
							Sign Up
						</button>
						<div className="text-center mt-4">
							<h6 className="text-muted">
								Already have a account? <NavLink to={"/login"}>Sign In</NavLink>
							</h6>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
