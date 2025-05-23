import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../utils/servies/auth";

const Login = () => {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleLogin = async (e) => {
		try {
			e.preventDefault();
			const res = await login({ email, password });
			let payload = {
				profile: res.data,
				token: res.data.token,
			};
			dispatch(saveUser(payload));
			toast.success("Successfully logged In");
			navigate("/home");
		} catch (err) {
			toast.error(err.message);
		}
	};
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
			<div className="card p-4 shadow w-100" style={{ maxWidth: "600px", width: "400px" }}>
				<h3 className="text-center mb-4 text-muted">
					Create a account with <span style={{ color: "green" }}>MIMO</span>
				</h3>
				<form onSubmit={handleLogin}>
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
