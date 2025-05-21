import Users from "./Users";
import Chat from "./Chat";

const MainChat = () => {
  return (
    <div className="d-flex vh-100 bg-white overflow-hidden">
      <div className="border-end bg-white" style={{ width: '300px', overflowY: 'auto' }}>
        <Users />
      </div>

      {/* Chat Section */}
      <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
        <Chat />
      </div>
    </div>
  );
};

export default MainChat;
