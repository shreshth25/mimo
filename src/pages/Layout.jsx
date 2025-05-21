import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // This should be your sidebar

const Layout = () => {
  const { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to="/login" />;

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row g-0">
        <div className="col-2 vh-100 bg-light border-end">
          <Navbar />
        </div>
        <div className="col-10 p-4" style={{ overflowY: 'auto', height: '100vh' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
