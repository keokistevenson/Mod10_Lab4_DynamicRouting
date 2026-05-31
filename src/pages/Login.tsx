import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/admin");
  }

  return (
    <main>
      <h1>Login</h1>
      <p>This is a fake login for the lab.</p>
      <button onClick={handleLogin}>Log In</button>
    </main>
  );
}

export default Login;