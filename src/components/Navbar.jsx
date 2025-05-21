import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex flex-column p-3 h-100">
      <h4 className="mb-4 text-center">Mimo</h4>
      <NavLink to="/chat" className="btn btn-outline-primary mb-2 text-center">
        Chat
      </NavLink>
      <NavLink to="/profile" className="btn btn-outline-primary mb-2 text-center">
        Profile
      </NavLink>
      <NavLink to="/action" className="btn btn-outline-primary mb-2 text-center">
        Actions
      </NavLink>
    </div>
  );
};

export default Navbar;
