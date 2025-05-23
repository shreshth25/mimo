// MainChat.jsx
import Users from "./Users";
import Chat from "./Chat";
import { useState } from "react";

const MainChat = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="d-flex h-100 overflow-hidden">
      <div
        className="border-end"
        style={{
          width: "300px",
          minWidth: "300px",
          overflowY: "auto",
          backgroundColor: "white",
        }}
      >
        <Users setUser={setSelectedUser} />
      </div>

      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Chat selectedUser={selectedUser} />
      </div>
    </div>
  );
};

export default MainChat;
