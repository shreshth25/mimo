import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/authSlice";

const Navbar = () => {
	const {profile} = useSelector((state)=>state.auth)
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login");
	};

	return (
		<div className="d-flex flex-column p-3 h-100">
			<h4 className="mb-4 text-center">{profile.name}</h4>
			<NavLink to="/chat" className="btn btn-outline-primary mb-2 text-center">
				Chat
			</NavLink>
			<NavLink to="/profile" className="btn btn-outline-primary mb-2 text-center">
				Profile
			</NavLink>
			<NavLink to="/action" className="btn btn-outline-primary mb-2 text-center">
				Actions
			</NavLink>
			<button className="btn btn-outline-danger mb-2 text-center" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
};

export default Navbar;
