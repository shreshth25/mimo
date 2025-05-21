import { useState } from "react";
import { IoSend } from "react-icons/io5";
import RenderMessage from "../components/RenderMessage";

const Chat = () => {
	const data = [
		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
        		{
			message: "Hi",
			sender: "You",
		},
		{
			message: "Hello!",
			sender: "Raghav",
		},
		{
			message: "How are you?",
			sender: "You",
		},
		{
			message: "I'am GoodGood☺️",
			sender: "Raghav",
		},
	];
	const [message, setMessage] = useState("");

	const [messagesList, setMessagesList] = useState(data);

	const handleMessage = () => {
		const s = {
			message: message,
			sender: "You",
		};
		setMessagesList((prev) => [...prev, s]);
		setMessage("");
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleMessage();
		}
	};

	return (
		<div className="d-flex flex-column min-vh-100">
			<div className="card-body flex-grow-1 overflow-auto">
				{messagesList.map((msg, index) => (
					<RenderMessage msg={msg} key={index} />
				))}
			</div>
			<div className="card-footer bg-white border-top"
            style={{
		position: "sticky",
		bottom: 0,
		zIndex: 10,
	}}>
				<div className="d-flex gap-2 mt-2">
					<input
						className="form-control"
						placeholder="Type your message . . ."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={(e) => {
							handleKeyDown(e);
						}}
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
	);
};

export default Chat;
