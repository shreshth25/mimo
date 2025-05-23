import { useSelector } from "react-redux";
import "./MessageBubble.css"; // Create this CSS file
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiReplyFill } from "react-icons/ri";
import { useState } from "react";

const RenderMessage = ({ msg }) => {
	const { profile } = useSelector((state) => state.auth);
	const isSender = msg.sender_id === profile.user_id;
	const [showReaction, setShowReaction] = useState(false);

	return (
		<div
			className={`message-wrapper ${isSender ? "sent" : "received"}`}
			onMouseEnter={() => setShowReaction(true)}
			onMouseLeave={() => setShowReaction(false)}
		>
			{showReaction && (
				<div className="reaction">
					<div>
						<RiReplyFill />
					</div>
					<div>
						<MdOutlineEmojiEmotions />
					</div>
					<div>❤️</div>
					<div>👍🏻</div>
				</div>
			)}

			<div className={`message-bubble ${isSender ? "sent-bubble" : "received-bubble"}`}>
				<div className="message-text">{msg.message}</div>
				<div className="message-time">{msg.created_at}</div>
				<div className="message-time">
					{msg.is_seen ? "": ""}

				</div>
			</div>
		</div>
	);
};

export default RenderMessage;
