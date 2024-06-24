import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      const token = "dummy-token";
      localStorage.setItem("token", token);
      alert("Login Successful");
      window.location.href = "/home";
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email </label>
        <br />
        <input
          type="email"
          placeholder="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password </label>
        <br />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
