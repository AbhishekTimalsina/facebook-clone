import { useState } from "react";
import "./Auth.css";
import { useAuth } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { Login } = useAuth();

  function formHandler(e) {
    e.preventDefault();
    Login(credential.email, credential.password)
      .then(() => navigate("/"))
      .catch((e) => {
        setError(e.code);
      });
  }

  function credentialHandler(e) {
    setCredential((prevCredential) => {
      return {
        ...prevCredential,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <section className="section-auth">
      <div className="auth-form_container">
        <form onSubmit={formHandler}>
          <input
            type="email"
            id="email"
            name="email"
            value={credential.email}
            placeholder="Email"
            onChange={credentialHandler}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            value={credential.password}
            placeholder="Password"
            onChange={credentialHandler}
            required
          />
          <button className="auth-btn">Login</button>
        </form>
        {error && <div className="auth-error">{error}</div>}
        <div className="auth-bottom">
          <Link className="hello" to="/Signup">
            Create new account
          </Link>
        </div>
      </div>
    </section>
  );
};
