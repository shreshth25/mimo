// Layout.jsx
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="d-flex flex-column vh-100 overflow-hidden">
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex-grow-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
