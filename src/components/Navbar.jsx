import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/authSlice";
import { IoMdChatboxes } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
	const { profile } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser());
		navigate("/login");
	};

	return (
		<nav className="p-2 navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Mimo
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<IoMdChatboxes
								onClick={() => navigate("/chat")}
								className="text-success mr-4 cursor-pointer"
								style={{ height: "40px", width: "30px" }}
								title="Go to Chat"
							/>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					</ul>
					<div>
						<h5 className="d-flex align-items-center">
							<span>Hi, {profile.name}</span>
							<IoMdLogOut
								onClick={handleLogout}
								className="text-danger mx-2 cursor-pointer"
								style={{ height: "40px", width: "30px" }}
								title="Go to Chat"
							/>
						</h5>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
