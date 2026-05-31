import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>

      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}

export default Navbar;