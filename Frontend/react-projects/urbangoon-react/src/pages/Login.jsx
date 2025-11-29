import { useState } from "react";
import styles from "../styles/Auth.module.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Loading...");

    const res = await fetch("http://localhost/Urbangoon-Fullstack/Backend/Urbangoon/auth/login_handler.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("user", JSON.stringify(data.user));
      setMsg("Login successful! Redirecting...");
      setTimeout(() => (window.location.href = "/"), 1000);
    } else {
      setMsg("Invalid credentials!");
    }
  };

  return (
    <div className={styles.authBox}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>

      {msg && <p className={styles.msg}>{msg}</p>}

      <p className={styles.switch}>
        Don’t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}

export default Login;
