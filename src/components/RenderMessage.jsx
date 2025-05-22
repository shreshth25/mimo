import { useSelector } from "react-redux";

const RenderMessage = ({ msg }) => {
	const {profile} = useSelector((state)=>state.auth)
	return (
		<div
			className={`d-flex m-1 ${
				msg.sender_id === profile.user_id ? "justify-content-end" : "justify-content-start"
			} `}
		>
			<span className={`p-2 shadow-md rounded ${msg.sender_id === profile.user_id ? "bg-light" : "bg-secondary text-white"}`}>{msg.message}</span>
		</div>
	);
};

export default RenderMessage;
