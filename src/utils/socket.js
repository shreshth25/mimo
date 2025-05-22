import { useEffect, useMemo } from "react";
import { io } from "socket.io-client";

const useCustomSocket = ({sender_id}) => {
	let wsUrl = "ws://localhost:4000/";

	let socket = useMemo(
		() =>
			io(wsUrl, {
				transports: ["websocket"],
				reconnectionAttempts: 5,
				reconnectionDelay: 5000,
			}),
		[wsUrl]
	);

	useEffect(() => {
		if (!socket) return;

		socket.on("connect", () => {
			socket.emit("join", { user_id: sender_id });
		});

		return () => {
			socket.disconnect();
		};
	}, [socket, sender_id]);

	return socket ;
};

export default useCustomSocket;
