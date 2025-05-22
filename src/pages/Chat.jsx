import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import RenderMessage from "../components/RenderMessage";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import mimo from "../../src/assets/mimo.png";
import useCustomSocket from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Chat = ({ selectedUser }) => {
	const end_mssg_ref = useRef();
	const [message, setMessage] = useState("");
	const [messagesList, setMessagesList] = useState([]);
	const receiver_id = selectedUser?.user_id || null;
	const { profile, token } = useSelector((state) => state.auth);
	const sender_id = profile.user_id;

	const socket  = useCustomSocket({ sender_id: sender_id });

	const handleMessage = () => {
		if (message.trim() !== "") {
			const new_message = {
				sender_id: sender_id,
				receiver_id: receiver_id,
				message: message,
			}
			socket.emit("send_message", new_message);
			setMessage("");
		}
	};

	useEffect(()=>{
		if (!socket) return;

		const handleReceiveMessage=(data)=>{
			if((data.sender_id == sender_id && data.receiver_id == receiver_id) ||
				(data.sender_id == receiver_id && data.receiver_id == sender_id)
			)
			{
				setMessagesList((prev)=>[...prev, data])
			}	
		}

		socket.on('receive_message', handleReceiveMessage);

		return ()=>{
			socket.off('receive_message', handleReceiveMessage);
		}
	}, [socket, receiver_id])

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && e.shiftKey) {
			return;
		}
		if (e.key === "Enter") {
			handleMessage();
		}
	};


	const fetchChats = async()=>{
        try {
            let headers = {
                'Authorization': `Bearer ${token}`,
				'content-type': 'application/json'
            }
			let data = {
				'receiver_id': receiver_id
			}
			let res = await axios.post("http://localhost:4000/chat/", data, {
                headers: headers
            });
			if (res.status === 200) {
				setMessagesList(res.data.data)
			}
		} catch (e) {
			console.log(e);
			toast.error(e.response?.data?.message || "Server Down")
		}
    }

    useEffect(()=>{
		if(sender_id && receiver_id)
		{
        fetchChats()
		}
    },[receiver_id])


	useEffect(() => {
		end_mssg_ref.current?.scrollIntoView();
	}, [messagesList]);

	return (
		<>
			{selectedUser === null ? (
				<div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
					<img src={mimo} alt="Mimo Logo" className="h-50 w-50" />
					<IoIosLock className="text-muted" />
					<div className="text-muted">Your personal messages are end-to-end encrypted</div>
				</div>
			) : (
				<div className="d-flex flex-column min-vh-100">
					<div
						className="d-flex justify-content-between align-items-center px-3 py-3 bg-success bg-gradient border border-secondary"
						style={{
							position: "sticky",
							top: 0,
							zIndex: 100,
						}}
					>
						<img
							src={mimo}
							style={{
								height: "30px",
								width: "30px",
								borderRadius: "50%",
								border: "1px solid white",
								padding: "1px",
							}}
						/>
						<div className="text-bold text-white">{selectedUser.name}</div>
						<BsThreeDotsVertical className="text-white" />
					</div>
					<div className="card-body flex-grow-1 overflow-auto">
						{messagesList.map((msg, index) => (
							<RenderMessage msg={msg} key={index} />
						))}
						<div ref={end_mssg_ref}></div>
					</div>
					<div
						className="card-footer bg-white border-top"
						style={{
							position: "sticky",
							bottom: 0,
							zIndex: 10,
						}}
					>
						<div className="d-flex gap-2 mt-2">
							<input
								className="form-control"
								placeholder="Type your message . . ."
								value={message}
								rows={1}
								onChange={(e) => setMessage(e.target.value)}
								onKeyDown={(e) => {
									handleKeyDown(e);
								}}
								type="text"
							/>
							<button
								className="btn btn-secondary"
								disabled={message.trim() === ""}
								onClick={handleMessage}
							>
								<IoSend />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Chat;
