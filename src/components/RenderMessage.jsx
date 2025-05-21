import React from "react";

const RenderMessage = ({ msg }) => {
	return (
		<div
			className={`d-flex p-2 m-2 ${
				msg.sender === "You" ? "justify-content-end" : "justify-content-start"
			} `}
		>
			<span className={`p-3 shadow-md p-3 rounded ${msg.sender === "You" ? "bg-light" : "bg-secondary text-white"}`}>{msg.message}</span>
		</div>
	);
};

export default RenderMessage;
