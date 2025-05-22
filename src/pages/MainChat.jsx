import Users from "./Users";
import Chat from "./Chat";
import { useState } from "react";

const MainChat = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  return (
    <div className="d-flex vh-100 bg-white overflow-hidden">
      <div className="border-end bg-white" style={{ width: '300px', overflowY: 'auto' }}>
        <Users setUser = {setSelectedUser}/>
      </div>

      {/* Chat Section */}
      <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
        <Chat selectedUser = {selectedUser}/>
      </div>
    </div>
  );
};

export default MainChat;
