import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { IoIosAddCircleOutline } from "react-icons/io";
import { fetchUsers } from "../utils/servies/chat";

const Users = ({ setUser }) => {
	const { profile, token } = useSelector((state) => state.auth);

	const [users, setUsers] = useState([]);
	const [filterUser, setFilterUsers] = useState([]);
	const [input, setInput] = useState("");

	const handleChatFetchUsers = async () => {
		try {
			const res = await fetchUsers();
			setUsers(res.data);
			setFilterUsers(res.data);
		} catch (err) {
			toast.error(err.message);
		}
	};

	useEffect(() => {
		handleChatFetchUsers();
	}, []);

	const searchData = () => {
		let us = users.filter((user) => {
			return user.name.toLowerCase().includes(input.toLowerCase());
		});
		setFilterUsers(us);
	};

	useEffect(() => {
		searchData();
	}, [input]);

	return (
		<div>
			<div className="d-flex justify-contents-center align-items-center">
				<input
					className="form-control"
					placeholder="Search or start a new chat"
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
					<IoIosAddCircleOutline />
				</button>
				<div
					className="modal fade"
					id="exampleModal"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Modal title
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul className="list-group list-group-flush pe-auto">
				{filterUser.map((user, index) =>
					user.user_id != profile.user_id ? (
						<li
							className="list-group-item d-flex justify-content-between align-items-center"
							onClick={() => {
								setUser(user);
							}}
							key={index}
						>
							{user.name}
							{user.count > 0 && (
								<span className="badge bg-primary rounded-pill">{user.count}</span>
							)}
						</li>
					) : null
				)}
			</ul>
		</div>
	);
};

export default Users;
