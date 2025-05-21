import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
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
		if (e.key == "Enter") {
			handleMessage();
		}
	};

	return (
		<div className="card h-100 w-100 rounded-0 border-0">
			<div className="card-body">
				{messagesList.map((msg, index) => (
					<RenderMessage msg={msg} key={index} />
				))}
			</div>
			<div className="card-footer">
				<div className="d-flex gap-2 mt-2">
                    <div>
					<MdEmojiEmotions />
                    </div>
                    <div>
					<IoIosAttach />
                    </div>

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
						disabled={message.trim() == ""}
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
